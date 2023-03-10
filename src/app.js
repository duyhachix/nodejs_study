const express = require('express'); // load lib exporess
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const path = require('path');
const serveStatic = require('serve-static');

const app = express(); // return app instance when call function express()
const port = 3040;

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// HTTP logger
app.use(morgan('combined'));

// template engin
app.engine('hbs', engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, './resources/views'));
// app.use(serveStatic(path.join(__dirname, './resources/views')))

// dang ki dir cho static file
app.use(express.static(__dirname + '/public'));

// route
app.get('/', (req, res) => {
	console.log('start serve');
	res.render('home'); // auto luon render main.handlebars
});

app.get('/news', (req, res) => {
	console.log(req.query.q);
	res.render('news');
});

// search page
app.get('/search', (req, res) => {
	console.log(req.query.q);
	console.log(req.query.ref);
	console.log(req.query.author);
	console.log(123);
	res.render('search');
});

app.post('/search', (req, res) => {
	console.log(req.body);
	res.send('');
});

app.listen(port, () => {
	console.log(`Example app listening on port http://localhost:${port}`);
});
