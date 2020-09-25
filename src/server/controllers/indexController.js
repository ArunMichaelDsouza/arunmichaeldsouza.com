// Index controller

const router = require('express').Router({ mergeParams: false }),
    Talk = require('../models/Talk'),
    Blog = require('../models/Blog'),
    Project = require('../models/Project'),
    Promise = require('bluebird');

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
    .get('/open-source', (req, res) => {
        return Project.find({ type: 'open source' }).sort({ date: -1 })
            .then(projects => res.render('openSource', { projects }))
            .catch(err => res.status(500).send('Some error occurred'));
    })
    .get('/blog', (req, res) => {
        return Blog.find({ published: true }).sort({ date: -1 })
            .then(blogs => res.render('blog', { blogs }))
            .catch(err => res.status(500).send('Some error occurred'));
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
    .get('/travelog', (req, res) => res.render('travelog'));

module.exports = router;