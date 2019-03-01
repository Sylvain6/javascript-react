const express = require('express');
const router = express();
const path = require('path');

router.use('/static', express.static(__dirname + '/public'));
router.use('/static', express.static(__dirname + '/weact'));
router.use('/static', express.static(__dirname + '/weact/utils'));
router.use('/static', express.static(__dirname + '/weact/component'));

router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'public/index.html'))
});
router.get('/about', function (req, res) {
    res.sendFile(path.join(__dirname, 'public/index.html'))
});
router.get('/home', function (req, res) {
    res.sendFile(path.join(__dirname, 'public/index.html'))
});

router.get('/test', function (req, res) {
    res.sendFile(path.join(__dirname, 'public/index.html'))
});

router.get('/weact/app.js', function (req, res) {
    res.sendFile(path.join(__dirname, 'weact/app.js'))
});

router.get('/weact/main.js', function (req, res) {
    res.sendFile(path.join(__dirname, 'weact/main.js'))
});

router.get('/weact/weact.js', function (req, res) {
    res.sendFile(path.join(__dirname, 'weact/weact.js'))
});

router.get('/weact/routing.js', function (req, res) {
    res.sendFile(path.join(__dirname, 'weact/routing.js'))
});

router.get('/weact/element/weact.js', function (req, res) {
    res.sendFile(path.join(__dirname, 'weact/element/weact.js'))
});

router.get('/weact/utils/props.js', function (req, res) {
    res.sendFile(path.join(__dirname, 'weact/utils/props.js'))
});

router.get('/weact/utils/helpers.js', function (req, res) {
    res.sendFile(path.join(__dirname, 'weact/utils/helpers.js'))
});

router.get('/weact/weact.js', function (req, res) {
    res.sendFile(path.join(__dirname, 'weact/weact.js'))
});

router.get('/weact/utils/messageError.js', function (req, res) {
    res.sendFile(path.join(__dirname, 'weact/utils/messageError.js'))
});

router.get('/weact/component/home.js', function (req, res) {
    res.sendFile(path.join(__dirname, 'weact/component/home.js'))
});

router.get('/weact/component/about.js', function (req, res) {
    res.sendFile(path.join(__dirname, 'weact/component/about.js'))
});

router.get('/weact/component/test.js', function (req, res) {
    res.sendFile(path.join(__dirname, 'weact/component/test.js'))
});

router.listen(9000, function () {
    console.log('Server Express running on port 9000!')
});
