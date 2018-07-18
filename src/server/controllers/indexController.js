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
    .get('/blog/:blogUrl', (req, res) => {
        return Blog.findOne({ url: req.params.blogUrl })
            .then(blog => {
                const { title: blogTitle, date, content } = blog;

                return res.render('blog', { blogTitle, date, content });
            })
            .catch(err => res.status(500).send('Some error occurred'));
    })
    .get('/travelog', (req, res) => res.render('travelog'));

module.exports = router;