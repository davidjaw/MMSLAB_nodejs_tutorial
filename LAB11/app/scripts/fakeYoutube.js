/* global $ */
$(function () {
  var getVBoxContent = function getVBoxContent(vBox) {
    return {
      img: vBox.find('img').attr('src'),
      title: vBox.find('h4').html(),
      auth: vBox.find('.auth').html(),
      viewNum: vBox.find('.viewNum span').html(),
      remark: vBox.data('remark'),
      commentNum: vBox.data('commentnum'),
    };
  };
  var mainSecEle = {
    info: $('.imgContainer'),
    img: $('.imgContainer img'),
    title: $('.autherSec h2'),
    auth: $('.authInfo h5').not('.hover'),
    comment: $('.commentSec h5'),
  };
  var setDataOnMainEle = function setDataOnMainEle(mainInfo) {
    for (var attr in mainInfo) {
      var lowercase = attr.toLowerCase();
      mainSecEle.info.data(lowercase, mainInfo[attr]);
    }
  };
  $('.vBox').on('click', function (e) {
    var vBox = $(e.currentTarget);
    var vBoxInfo = getVBoxContent(vBox);
    var mainInfo = {
      img: mainSecEle.info.data('img'),
      title: mainSecEle.info.data('title'),
      auth: mainSecEle.info.data('auth'),
      commentNum: mainSecEle.info.data('commentnum'),
      remark: mainSecEle.info.data('remark'),
      viewNum: mainSecEle.info.data('viewnum'),
    };
    mainSecEle.img.attr('src', vBoxInfo.img);
    mainSecEle.title.html(vBoxInfo.title);
    mainSecEle.auth.html(vBoxInfo.auth);
    mainSecEle.comment.html('留言 \u2027 ' + vBoxInfo.commentNum);
    $('.infoSec').empty().append('<p>' + vBoxInfo.remark.replace(/\n/g, '</p><p>') + '</p>');
    setDataOnMainEle(vBoxInfo);
    vBox.find('img').attr('src', mainInfo.img).end().find('h4').html(mainInfo.title).end().find('.auth').html(mainInfo.auth).end().data('remark', mainInfo.remark).data('viewnum', mainInfo.viewNum).data('commentnum', mainInfo.commentNum);
  });
});
