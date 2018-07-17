// Blog model

const mongoose = require('mongoose'),
    blogSchema = {
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
    },
    Blog = mongoose.model('blog', blogSchema, 'blogs');

module.exports = Blog;

