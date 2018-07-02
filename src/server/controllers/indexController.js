// Index controller

const router = require('express').Router({ mergeParams: false });

router
    .get('/', (req, res) => res.render('index'))
    .get('/travelog', (req, res) => res.render('travelog'));

module.exports = router;