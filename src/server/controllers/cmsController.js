// CMS controller

const router = require('express').Router({ mergeParams: false }),
    cmsLoggedIn = (id, password) => {
        return (id === process.env.CMS_ID && password === process.env.CMS_PASSWORD) ? true : false;
    };

router
    .get('/', (req, res) => {
        const { loggedIn } = req.session;

        return res.render('cms', { loggedIn });
    })
    .post('/', (req, res) => {
        const { id, password } = req.body;

        if (cmsLoggedIn(id, password)) {
            req.session.loggedIn = true;
        }

        return res.redirect('/cms');
    });

module.exports = router;