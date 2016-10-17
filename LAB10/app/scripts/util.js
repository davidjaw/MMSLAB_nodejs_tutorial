/* global window, document */
window.onload = {
  var welcomeElement = document.createElement('div');
  welcomeElement.innerHTML = '<h3>我的JS成功被載入了!!!</h3>';
  document.getElementsByTagName('body')[0].appendChild(welcomeElement);
};
