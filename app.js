/**
 * Created by ZE on 2017/03/26.
 */
var express = require('express');
var path = require('path');
var app = express();
app.use('/static', express.static('public'));
var react = require('./react');
app.use('/react', react);
app.get('/', function (req, res) {
    res.send('Hello, Express');
})
app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
});
