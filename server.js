const express = require('express');
const router = express();
const path = require('path');

router.use('/static', express.static(__dirname + '/public'));
router.use('/static', express.static(__dirname + '/weact'));

router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'public/index.html'))
});
router.get('/about', function (req, res) {
    res.sendFile(path.join(__dirname, 'public/index.html'))
});
router.get('/home', function (req, res) {
    res.sendFile(path.join(__dirname, 'public/index.html'))
});

router.get('/weact/app.js', function (req, res) {
    res.sendFile(path.join(__dirname, 'weact/app.js'))
});

router.get('/weact/home.js', function (req, res) {
    res.sendFile(path.join(__dirname, 'weact/home.js'))
});

router.get('/weact/about.js', function (req, res) {
    res.sendFile(path.join(__dirname, 'weact/about.js'))
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


router.use(function(req, res){
    res.send('404 - Not found');
    console.log('Not found!?!');
});


router.listen(9000, function () {
    console.log('Server Express running on port 9000!')
});
