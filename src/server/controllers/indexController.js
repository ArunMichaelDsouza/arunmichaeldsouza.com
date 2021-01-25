// Index controller

const router = require('express').Router({ mergeParams: false }),
    Talk = require('../models/Talk'),
    Blog = require('../models/Blog'),
    Project = require('../models/Project'),
    Tag = require('../models/Tag'),
    Promise = require('bluebird');

router
    .get('/about', (req, res) => {
        return res.render('index');
    })
    .get('/privacy-policy', (req, res) => {
        return res.render('privacyPolicy');
    })
    .get('/talks', (req, res) => {
        return Talk.find().sort({ eventDate: -1 })
            .then(talks => res.render('talks', { talks }))
            .catch(err => res.status(500).send('Some error occurred'));
    })
    .get('/open-source', (req, res) => {
        return Project.find({ type: 'open source' }).sort({ date: -1 })
            .then(projects => res.render('openSource', { projects }))
            .catch(err => res.status(500).send('Some error occurred'));
    })
    .get('/', (req, res) => {
        return Promise.all([Blog.find({ published: true }).sort({ date: -1 }), Tag.find()])
            .then(([blogs, tags]) => {
                return res.render('blog', { blogs, tags });
            })
            .catch(err => res.status(500).send('Some error occurred'));
    })
    .get('/blog', (req, res) => {
        return res.redirect('/');
    })
    .get('/blog/:blogUrl', (req, res) => {
        return Blog.findOne({ url: req.params.blogUrl })
            .then(blog => Promise.all([blog, Blog.getPreviousAndNextBlogs(blog._id)]))
            .then(blogData => {
                const [blog, previousAndNextBlogs] = blogData,
                    { title: blogTitle, date, content, url, published, metaDescription, metaKeywords, metaImage, tags } = blog,
                    { previousBlog, nextBlog } = previousAndNextBlogs;

                if (published) {
                    return res.render('blogPost', {
                        blogTitle, date, content, url, metaDescription, metaKeywords, metaImage, previousBlog, nextBlog, tags
                    });
                }

                return res.send('Blog not published yet!');
            })
            .catch(err => {
                console.log(err);
                res.status(500).send('Some error occurred')
            });
    })
    .get('/blog/tag/:tag', (req, res) => {
        const { tag } = req.params;
        const pageHeading = `Blog posts tagged under "${tag}"`;
        return Blog.find({ published: true, tags: tag}).sort({ date: -1 })
            .then(blogs => res.render('blog', { blogs, pageHeading, tag }))
            .catch(err => res.status(500).send('Some error occurred'));
    })
    .get('/demos/device-orientation-api-desktop', (req, res) => {
        return res.render('demos/device-orientation-api/desktop');
    })
    .get('/demos/device-orientation-api-mobile', (req, res) => {
        return res.render('demos/device-orientation-api/mobile');
    })
    .get('/demos/device-motion-event-mobile', (req, res) => {
        return res.render('demos/device-motion-event/mobile');
    })
    .get('/travelog', (req, res) => res.render('travelog'));

module.exports = router;