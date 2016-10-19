/* global require, exports */
var pug = require('pug');
exports.index = function(req, res) {
  var pageInfo = {
    viewName: 'article',
    extra: false,
  };
  var content = pug.renderFile('./app/container.pug', { basedir: './app/template' }, pageInfo);
  res.send(content);
};

