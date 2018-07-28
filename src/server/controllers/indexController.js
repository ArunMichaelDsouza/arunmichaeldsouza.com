// Index controller

const router = require('express').Router({ mergeParams: false }),
    Talk = require('../models/Talk'),
    Blog = require('../models/Blog');

router
    .get('/', (req, res) => {
        return Talk.find().sort({ eventDate: -1 })
            .then(talks => res.render('index', { talks }))
            .catch(err => res.status(500).send('Some error occurred'));
    })
    .get('/talks', (req, res) => {
        return Talk.find().sort({ eventDate: -1 })
            .then(talks => res.render('talks', { talks }))
            .catch(err => res.status(500).send('Some error occurred'));
    })
    .get('/blog', (req, res) => {
        return Blog.find({ published: true }).sort({ date: -1 })
            .then(blogs => res.render('blog', { blogs }))
            .catch(err => res.status(500).send('Some error occurred'));
    })
    .get('/blog/:blogUrl', (req, res) => {
        return Blog.findOne({ url: req.params.blogUrl })
            .then(blog => {
                const { title: blogTitle, date, content, url, published, metaDescription, metaKeywords, metaImage } = blog;

                if (published) {
                    return res.render('blogPost', {
                        blogTitle, date, content, url, metaDescription, metaKeywords, metaImage
                    });
                }

                return res.send('Blog not published yet!');
            })
            .catch(err => res.status(500).send('Some error occurred'));
    })
    .get('/travelog', (req, res) => res.render('travelog'));

module.exports = router;