/* global window, document */
window.onload = function() {
  var welcomeElement = document.createElement('div');
  welcomeElement.innerHTML = '<h3>我的JS成功載入了!!!</h3>';
  document.querySelector('.container').appendChild(welcomeElement);
};

