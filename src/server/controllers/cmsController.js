// CMS controller

const router = require('express').Router({ mergeParams: false }),
    Talk = require('../models/Talk'),
    Blog = require('../models/Blog'),
    Project = require('../models/Project'),
    Promise = require('bluebird'),
    cmsLoggedIn = (id, password) => {
        return (id === process.env.CMS_ID && password === process.env.CMS_PASSWORD) ? true : false;
    },
    btoa = text => Buffer.from(text).toString('base64');

router
    .get('/', (req, res) => {
        const { loggedIn } = req.session;

        return Promise.join(
            Talk.find(),
            Blog.find(),
            Project.find(),
            function (talks, blogs, projects) {
                return res.render('cms/index', { loggedIn, talks: talks.length, blogs: blogs.length, projects: projects.length });
            })
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
    .get('/projects', (req, res) => {
        const { loggedIn } = req.session;

        if (loggedIn) {
            return Project.find().sort()
                .then(projects => res.render('cms/projects', { projects }))
                .catch(err => res.status(500).send('Some error occurred'));
        }

        return res.redirect('/cms');
    })
    .post('/projects', (req, res) => {
        const { title, url, image, language, description, type } = req.body;

        return Project.create({
            title,
            url,
            image,
            language,
            description,
            type,
            date: new Date()
        })
            .then(project => res.redirect('/cms/projects'))
            .catch(err => res.status(500).send('Some error occurred'));
    })
    .post('/projects/delete', (req, res) => {
        const { id } = req.body;

        return Project.findByIdAndRemove(id)
            .then(() => res.redirect('/cms/projects'))
            .catch(err => res.status(500).send('Some error occurred'));
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

        return Talk.create({
            title,
            slidesUrl,
            videoUrl,
            location,
            eventName,
            eventUrl,
            eventDate
        })
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
            return Blog.find().sort({ date: -1 })
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
                    const { title: blogTitle, content: blogContent, date: blogDate, _id, metaDescription, metaKeywords, metaImage } = blog;

                    return res.render('cms/editor', {
                        blogTitle,
                        blogContent: btoa(blogContent),
                        blogDate,
                        _id,
                        metaDescription,
                        metaKeywords,
                        metaImage
                    });
                })
                .catch(err => res.status(500).send('Some error occurred'));
        }
    })
    .post('/blogs', (req, res) => {
        const { mode, id, title, date, content, published, metaDescription, metaKeywords, metaImage } = req.body;

        if (mode === 'create') {
            return Blog.create({
                title,
                date: date ? date : new Date(),
                content,
                url: title.replace(/ /g, '-').toLowerCase(),
                published,
                metaDescription,
                metaKeywords,
                metaImage
            })
                .then(blog => res.send({ success: 1 }))
                .catch(err => res.status(500).send('Some error occurred'));
        } else if (mode === 'edit') {
            return Blog.findByIdAndUpdate(id, {
                title,
                date: date ? date : new Date(),
                content,
                url: title.replace(/ /g, '-').toLowerCase(),
                published,
                metaDescription,
                metaKeywords,
                metaImage
            })
                .then(blog => res.send({ success: 1 }))
                .catch(err => res.status(500).send('Some error occurred'));
        }
    })
    .post('/blogs/delete', (req, res) => {
        const { id } = req.body;

        return Blog.findByIdAndRemove(id)
            .then(() => res.redirect('/cms/blogs'))
            .catch(err => res.status(500).send('Some error occurred'));
    });

module.exports = router;