// Webapp server

const express = require('express'),
	app = express(),
	constants = require('./lib/constants'),
	path = require('path'),
	woodlot = require('woodlot').middlewareLogger;

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.locals.constants = constants;

app.use(woodlot({
    streams: ['./logs/app.log'],
    stdout: true,
    userAnalytics: {
        platform: true,
        country: true
    },
}));

app.get('/', (req, res) => res.render('index'));

app.get('/travelog', (req, res) => res.render('travelog'));

app.listen(constants.PORT, () => {
	console.log(`Server running on port : ${constants.PORT}`)
});