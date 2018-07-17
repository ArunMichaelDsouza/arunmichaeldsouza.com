// CMS controller

const router = require('express').Router({ mergeParams: false }),
    Talk = require('../models/Talk'),
    Blog = require('../models/Blog'),
    cmsLoggedIn = (id, password) => {
        return (id === process.env.CMS_ID && password === process.env.CMS_PASSWORD) ? true : false;
    };

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
    .get('/blogs/editor', (req, res) => {
        const { loggedIn } = req.session;

        if (loggedIn) {
            return res.render('cms/editor');
        }

        return res.redirect('/cms');
    })
    .post('/blogs', (req, res) => {
        const { title, date, content, published } = req.body;

        return Blog.create({ title, date: date ? date : new Date(), content, url: title.replace(/ /g, '-'), published })
            .then(blog => res.send({ success: 1 }))
            .catch(err => res.status(500).send('Some error occurred'));
    });

module.exports = router;