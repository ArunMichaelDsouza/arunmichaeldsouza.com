// Project model

const mongoose = require('mongoose'),
    projectSchema = {
        title: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        language: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        type: {
            type: String,
            required: true
        }
    },
    Project = mongoose.model('project', projectSchema, 'projects');

module.exports = Project;

