/**
 * Created by ZE on 2017/03/26.
 */
var express = require('express');
var path = require('path');
var router = express.Router();

router.get('/', function (req, res) {
    return res.sendFile(path.join(__dirname + '/react/index.html'));
});

module.exports = router;
