/* global require, __dirname, console */
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

/* set global function */
app.set('render', function(pageInfo) {
  var page = { basedir: './app/template/' };
  for(var key in pageInfo) {
    page[key] = pageInfo[key];
  }
  page.content = pug.renderFile('./app/template/' + pageInfo.viewName + '.pug', pageInfo);
  var content = pug.renderFile('./app/container.pug', page);
  return content;
});

app.use('^/$', function(req, res) {
  var indexInfo = {
    viewName: 'index',
    pageTitle: '首頁 - ',
  };
  var indexContent = req.app.get('render')(indexInfo);
  res.send(indexContent);
});
app.use('/index', function(req, res) {
  var indexInfo = {
    viewName: 'index',
    pageTitle: '首頁 - ',
  };
  var indexContent = req.app.get('render')(indexInfo);
  res.send(indexContent);
});
/* protfolio routing */
app.use('/protfolio$', router.protfolio.index);
app.use('/protfolio/fakeYoutube', router.protfolio.youtube);
/* article part */
app.use('/article', router.article.index);

app.listen(port, function() {
  console.log('Listening on port :' + port);
});

