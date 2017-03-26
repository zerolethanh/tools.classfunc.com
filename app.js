/**
 * Created by ZE on 2017/03/26.
 */
var express = require('express');
var path = require('path');
var app = express();
app.use('/static', express.static('public'));
var birds = require('./birds');
var react = require('./react');
app.use('/birds', birds);
app.use('/react', react);
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/react/index.html'));
});

app.get('/users/:userId/books/:bookId', function (req, res) {
    res.send(req.params);
});

var cb0 = function (req, res, next) {
    console.log('CB0')
    next()
}

var cb1 = function (req, res, next) {
    console.log('CB1')
    next()
}

app.get('/example/d', [cb0, cb1], function (req, res, next) {
    next()
}, function (req, res) {
    res.send('Hello from D!')
})

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
});
