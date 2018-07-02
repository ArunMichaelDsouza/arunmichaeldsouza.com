// Server side router

const indexController = require('../controllers/indexController');
const cmsController = require('../controllers/cmsController');

module.exports = app => {
    app.use('/', (req, res, next) => {
        next();
    }, indexController);
    app.use('/cms', (req, res, next) => {
        next();
    }, cmsController);
};
