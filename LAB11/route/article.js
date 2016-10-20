/* global exports */
exports.index = function(req, res) {
  var pageInfo = {
    viewName: 'article',
    pageTitle: '文章列表 - ',
  };
  var content = req.app.get('render')(pageInfo);
  res.send(content);
};

