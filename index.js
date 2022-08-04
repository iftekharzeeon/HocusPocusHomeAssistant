const express = require('express');

const port = 3000;

// express app
const app = express();

const server = require('http').Server(app);
server.listen(port);
app.use(express.urlencoded({
    extended: true
}));


// register view engine
app.set('view engine', 'ejs');

// middleware & static files
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index');
});