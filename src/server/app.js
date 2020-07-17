// Webapp server

require('dotenv/config');

const express = require('express'),
    app = express(),
    db = require('./lib/db'),
    path = require('path'),
    bodyParser = require('body-parser'),
    session = require('express-session'),
    helmet = require('helmet'),
    woodlot = require('woodlot').middlewareLogger,
    startServer = () => {
        return app.listen(process.env.PORT, () => {
            console.log(`Server running on port : ${process.env.PORT}`);
        });
    };

app.use(helmet());
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

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

require('./lib/router')(app);

db.on('error', () => {
    console.log('Error connecting to MongoDB');
});
db.once('open', () => {
    console.log('Successfully connected to MongoDB');
    return startServer();
});
