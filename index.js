const express = require('express');
const app = express();
const path = require('path');
const port = 5000
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use(require('./routes'));

app.use(express.static(path.join(__dirname, 'public')));

app.listen(5000);

console.log('SERVER corriendo en http://localhost:5000');
