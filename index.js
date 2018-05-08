const express = require('express');
const bodyParser = require('body-parser');
const books = require('./books');

const app = express();

app.use(bodyParser.json())
app.listen(8080);

app.use('/books', books());
