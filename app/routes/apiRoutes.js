var express = require('express');
var apiRouter = express.Router();
var configFile = require('./../../config.json');

apiRouter.get('/accessToken/', function (req, res) {
    res.send('req.url: ' + req.url);
});

apiRouter.get('/checkService/', function (req, res) {
    var result = {
        status: 'ok',
        statusCode: 1
    };
    res.send(JSON.stringify(result));
});

module.exports = apiRouter;
