const express = require('express');
const routes = require('./routes/routes');

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

app.use('/', routes);

// middleware & static files
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile('./views/index.html', {root : __dirname});
});

app.get('/searchItem', (req, res) => {
    res.sendFile('./views/searchItem.html', {root : __dirname});
});

app.get('/musicItem', (req, res) => {
    res.sendFile('./views/musicItem.html', {root : __dirname});
});

app.get('/newsItem', (req, res) => {
    res.sendFile('./views/newsItem.html', {root : __dirname});
});

app.get('/mapView', (req, res) => {
    res.sendFile('./views/mapView.html', {root : __dirname});
});

app.get('/mapNew', (req, res) => {
    res.sendFile('./views/mapNew.html', {root : __dirname});
});

app.get('/map', (req, res) => {
    res.sendFile('./views/index_fabiha.html', {root : __dirname});
});