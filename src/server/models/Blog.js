// Blog model

const mongoose = require('mongoose'),
    blogSchema = {
        title: {
            type: String,
            required: true
        },
        blogDate: {
            type: Date,
            required: true
        },
    },
    Blog = mongoose.model('blog', blogSchema, 'blogs');

module.exports = Blog;

