// Blog model

const mongoose = require('mongoose'),
    blogSchema = {
        title: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true
        },
        published: {
            type: Boolean,
            default: false
        },
        blogDate: {
            type: Date,
            default: new Date()
        },
    },
    Blog = mongoose.model('blog', blogSchema, 'blogs');

module.exports = Blog;

