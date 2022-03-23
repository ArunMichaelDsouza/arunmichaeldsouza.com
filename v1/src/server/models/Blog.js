// Blog model

const mongoose = require('mongoose'),
    Promise = require('bluebird'),
    blogSchema = new mongoose.Schema({
        title: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true
        },
        published: {
            type: Boolean,
            default: false,
            required: true
        },
        date: {
            type: Date,
            required: true
        },
        metaDescription: {
            type: String,
            default: ''
        },
        metaKeywords: {
            type: String,
            default: ''
        },
        metaImage: {
            type: String,
            default: ''
        },
        tags: {
            type: Array,
            default: []
        }
    });

blogSchema.statics = {
    getPreviousAndNextBlogs: function (id) {
        return Promise.all([
            this.findOne({ _id: { $lt: id }, published: true }).select({ title: 1, url: 1, date: 1, _id: 0 }).sort({ _id: -1 }),
            this.findOne({ _id: { $gt: id }, published: true }).select({ title: 1, url: 1, date: 1, _id: 0 }).sort({ _id: 1 })
        ]).then(blogs => {
            const [previousBlog, nextBlog] = blogs;

            return {
                previousBlog: previousBlog ? previousBlog : null,
                nextBlog: nextBlog ? nextBlog : null
            };
        });
    }
};

const Blog = mongoose.model('blog', blogSchema, 'blogs');

module.exports = Blog;

