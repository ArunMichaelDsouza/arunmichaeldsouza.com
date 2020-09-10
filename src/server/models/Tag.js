// Tag model

const mongoose = require('mongoose'),
    tagSchema = {
        title: {
            type: String,
            required: true
        }
    },
    Tag = mongoose.model('tag', tagSchema, 'tags');

module.exports = Tag;

