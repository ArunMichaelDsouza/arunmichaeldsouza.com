// CMS controller

const router = require('express').Router({ mergeParams: false }),
    Talk = require('../models/Talk'),
    Blog = require('../models/Blog'),
    cmsLoggedIn = (id, password) => {
        return (id === process.env.CMS_ID && password === process.env.CMS_PASSWORD) ? true : false;
    },
    btoa = text => Buffer.from(text).toString('base64');

router
    .get('/', (req, res) => {
        const { loggedIn } = req.session;

        return Talk.find().sort({ eventDate: -1 })
            .then(talks => res.render('cms/index', { loggedIn, talks: talks.length }))
            .catch(err => res.status(500).send('Some error occurred'));
    })
    .post('/', (req, res) => {
        const { id, password } = req.body;

        if (cmsLoggedIn(id, password)) {
            req.session.loggedIn = true;
        }

        return res.redirect('/cms');
    })
    .get('/logout', (req, res) => {
        req.session.destroy(() => {
            return res.redirect('/cms');
        });
    })
    .get('/talks', (req, res) => {
        const { loggedIn } = req.session;

        if (loggedIn) {
            return Talk.find().sort({ eventDate: -1 })
                .then(talks => res.render('cms/talks', { talks }))
                .catch(err => res.status(500).send('Some error occurred'));
        }

        return res.redirect('/cms');
    })
    .post('/talks', (req, res) => {
        const { title, slidesUrl, videoUrl, location, eventName, eventUrl, eventDate } = req.body;

        return Talk.create({ title, slidesUrl, videoUrl, location, eventName, eventUrl, eventDate })
            .then(talk => res.redirect('/cms/talks'))
            .catch(err => res.status(500).send('Some error occurred'));
    })
    .post('/talks/delete', (req, res) => {
        const { id } = req.body;

        return Talk.findByIdAndRemove(id)
            .then(() => res.redirect('/cms/talks'))
            .catch(err => res.status(500).send('Some error occurred'));
    })
    .get('/blogs', (req, res) => {
        const { loggedIn } = req.session;

        if (loggedIn) {
            return Blog.find().sort({ eventDate: -1 })
                .then(blogs => res.render('cms/blogs', { blogs }))
                .catch(err => res.status(500).send('Some error occurred'));
        }

        return res.redirect('/cms');
    })
    .get(['/blogs/editor/:blogId', '/blogs/editor'], (req, res) => {
        const { loggedIn } = req.session,
            { blogId } = req.params;

        if (!loggedIn) {
            return res.redirect('/cms');
        }

        if (!blogId && loggedIn) {
            return res.render('cms/editor');
        } else {
            return Blog.findById(blogId)
                .then(blog => {
                    const { title: blogTitle, content: blogContent, date: blogDate } = blog;

                    return res.render('cms/editor', {
                        blogTitle, blogContent: btoa(blogContent), blogDate
                    });
                })
                .catch(err => res.status(500).send('Some error occurred'));
        }
    })
    .post('/blogs', (req, res) => {
        const { title, date, content, published } = req.body;

        return Blog.create({ title, date: date ? date : new Date(), content, url: title.replace(/ /g, '-').toLowerCase(), published })
            .then(blog => res.send({ success: 1 }))
            .catch(err => res.status(500).send('Some error occurred'));
    })
    .post('/blogs/delete', (req, res) => {
        const { id } = req.body;

        return Blog.findByIdAndRemove(id)
            .then(() => res.redirect('/cms/blogs'))
            .catch(err => res.status(500).send('Some error occurred'));
    });

module.exports = router;