/* global exports */
exports.index = function(req, res) {
  var pageInfo = {
    viewName: 'profolio',
    pageTitle: '作品列表 - ',
  };
  var content = req.app.get('render')(pageInfo);
  res.send(content);
};
exports.youtube = function(req, res) {
  var pageInfo = {
    viewName: 'fakeYoutube',
    pageTitle: '假的Youtube練習 - ',
    extraCss: ['fakeYoutube.css'],
  };
  var content = req.app.get('render')(pageInfo);
  res.send(content);
};

