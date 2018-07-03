// Talk model

const mongoose = require('mongoose'),
    talkSchema = {
        title: {
            type: String,
            required: true
        },
        slidesUrl: {
            type: String,
            required: true
        },
        videoUrl: {
            type: String,
            default: ""
        },
        location: {
            type: String,
            required: true
        },
        eventName: {
            type: String,
            default: ""
        },
        eventUrl: {
            type: String,
            default: ""
        },
        eventDate: {
            type: Date,
            required: true
        },
    },
    Talk = mongoose.model('talk', talkSchema, 'talks');

module.exports = Talk;

