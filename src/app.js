const express = require('express'); // load lib exporess
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const path = require('path');
const serveStatic = require('serve-static');

const app = express(); // return app instance when call function express()
const port = 3030;

// HTTP logger
app.use(morgan('combined'));

// template engin
app.engine('hbs', engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, './resources/views'));
// app.use(serveStatic(path.join(__dirname, './resources/views')))

// route
app.get('/', (req, res) => {
	console.log('start serve');
	res.render('home'); // auto luon render main.handlebars
});

app.get('/news', (req, res) => {
	res.render('news');
});

app.listen(port, () => {
	console.log(`Example app listening on port http://localhost:${port}`);
});
