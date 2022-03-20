// Database handler

const mongoose = require('mongoose');

mongoose.Promise = Promise;
mongoose.connect(`mongodb://${process.env.DB_HOST}/${process.env.DB_NAME}`, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true
});

module.exports = mongoose.connection;
