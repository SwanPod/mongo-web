var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
	res.render('index');
});

app.listen(8080, console.log('Started server on port 8080'));
