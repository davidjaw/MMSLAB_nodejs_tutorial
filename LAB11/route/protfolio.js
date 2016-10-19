/* global exports */
exports.index = function(req, res) {
  var pageInfo = { viewName: 'profolio' };
  var content = req.app.get('render')(pageInfo);
  res.send(content);
};
exports.youtube = function(req, res) {
  var pageInfo = {
    viewName: 'fakeYoutube',
    extraCss: ['fakeYoutube.css'],
  };
  var content = req.app.get('render')(pageInfo);
  res.send(content);
};

