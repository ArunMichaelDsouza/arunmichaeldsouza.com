// Webapp server

require('dotenv/config');

const express = require('express'),
    app = express(),
    db = require('./lib/db'),
    path = require('path'),
    woodlot = require('woodlot').middlewareLogger,
    startServer = () => {
        return app.listen(process.env.PORT, () => {
            console.log(`Server running on port : ${process.env.PORT}`);
        });
    };

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(woodlot({
    streams: ['../logs/app.log'],
    stdout: true,
    userAnalytics: {
        platform: true,
        country: true
    },
}));

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/cms', (req, res) => {
    res.render('cms');
});

app.get('/travelog', (req, res) => res.render('travelog'));

db.on('error', () => {
    console.log('Error connecting to MongoDB');
});
db.once('open', () => {
    console.log('Successfully connected to MongoDB');
    return startServer();
});
