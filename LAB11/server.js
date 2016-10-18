var express = require('express');
var app = express();
var port = 3000;
var pug = require('pug');

var router = {};
router.article = require('./route/article');
router.protfolio = require('./route/protfolio');


app.use('/scripts', express.static(__dirname + '/app/scripts'));
app.use('/styles', express.static(__dirname + '/app/styles'));

app.use(function(req, res, next) {
  console.log('Visitor: ' + req.connection.remoteAddress);
  next();
});

app.use('^/$', function(req, res) {
  var indexInfo = { viewName: 'index', };
  var indexContent = pug.renderFile('./app/container.pug', { basedir: './app/template/' }, indexInfo);
  res.send(indexContent);
});
app.use('/index', function(req, res) {
  var indexInfo = { viewName: 'index', };
  var indexContent = pug.renderFile('./app/container.pug', { basedir: './app/template/' }, indexInfo);
  res.send(indexContent);
});

app.listen(port, function() {
  console.log('Listening on port :' + port);
});

