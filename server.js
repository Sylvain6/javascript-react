const express = require('express');
const router = express();
const path = require('path');

router.use('/static', express.static(__dirname + '/public'));
router.use('/static', express.static(__dirname + '/weact'));

router.get('/index.html', function (req, res) {
    res.sendFile(path.join(__dirname, 'public/index.html'))
});

router.get('/weact/app.js', function (req, res) {
    res.sendFile(path.join(__dirname, 'weact/app.js'))
});

router.get('/weact/weact.js', function (req, res) {
    res.sendFile(path.join(__dirname, 'weact/weact.js'))
});

router.get('/weact/props.js', function (req, res) {
    res.sendFile(path.join(__dirname, 'weact/props.js'))
});

router.get('/weact/helpers.js', function (req, res) {
    res.sendFile(path.join(__dirname, 'weact/helpers.js'))
});

router.get('/weact/messageError.js', function (req, res) {
    res.sendFile(path.join(__dirname, 'weact/messageError.js'))
});

router.get('/weact/routing.js', function (req, res) {
    res.sendFile(path.join(__dirname, 'weact/routing.js'))
});

router.get('/', function(req, res) {
    res.redirect('index.html');
});

router.listen(9000, function () {
    console.log('Server Express running on port 9000!')
});
