const express = require('express'); // load lib exporess
const app = express(); // return app instance when call function express()
const port = 3000;

// route
app.get('/', (req, res) => {
	let a = 1;
	let b = 2;

	let c = a + b + 1;
	res.send('Hello World!');
});
app.get('/mess', (req, res) => {
	res.send('Nani koree');
});

app.listen(port, () => {
	console.log(`Example app listening on port http://localhost:${port}`);
});
