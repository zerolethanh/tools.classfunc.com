/**
 * Created by ZE on 2017/03/26.
 */
var express = require('express');
var path = require('path');
var app = express();
app.use('/public', express.static('public'));
app.use('/react/dist', express.static('react/dist'));
var react = require('./react');
app.use('/react/?*', react);
app.get('/', function (req, res) {
    return res.redirect('/react');
})
app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
});
