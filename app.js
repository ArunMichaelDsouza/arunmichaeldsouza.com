// Webapp server

const express = require('express'),
	app = express(),
	constants = require('./lib/constants'),
	path = require('path');

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.get('/', (req, res) => res.render('index'));

app.listen(constants.PORT, () => {
	console.log(`Server running on port : ${constants.PORT}`)
});