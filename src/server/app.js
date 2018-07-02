// Webapp server

require('dotenv/config');

const express = require('express'),
    app = express(),
    db = require('./lib/db'),
    path = require('path'),
    bodyParser = require('body-parser'),
    session = require('express-session'),
    woodlot = require('woodlot').middlewareLogger,
    startServer = () => {
        return app.listen(process.env.PORT, () => {
            console.log(`Server running on port : ${process.env.PORT}`);
        });
    },
    cmsLoggedIn = (id, password) => {
        return (id === 'amd' && password === '19042009') ? true : false;
    }

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(woodlot({
    streams: ['../logs/app.log'],
    stdout: false,
    userAnalytics: {
        platform: true,
        country: true
    },
}));

app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false
}));

app.get('/', (req, res) => res.render('index'));

app.get('/cms', (req, res) => {
    const { loggedIn } = req.session;

    return res.render('cms', { loggedIn });
});

app.post('/cms', (req, res) => {
    const { id, password } = req.body;

    if (cmsLoggedIn(id, password)) {
        req.session.loggedIn = true;
    }

    return res.redirect('/cms');
});

app.get('/travelog', (req, res) => res.render('travelog'));

db.on('error', () => {
    console.log('Error connecting to MongoDB');
});
db.once('open', () => {
    console.log('Successfully connected to MongoDB');
    return startServer();
});
