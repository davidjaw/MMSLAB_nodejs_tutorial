/* global require, console */
var express = require('express');
/*在nodejs中, require會引入在node_modules的套件
 *如果沒有安裝相關套件會報錯                   */
var app = express();
/* 將app變數初始化為express函式 */
var port = 3000;
/* 設定nodejs網頁伺服器的進入port */

app.get('/*', express.static(__dirname + '/app'));
/* app.get為當nodejs網頁伺服器受到get方法時會呼叫的函數,
 * 第一個輸入引數為字串, nodejs會依照請求的url來對照引數
 * 分配該次請求要使用哪個函式, 因為本例為靜態檔案, 故將
 * 所有請求都分配到使用這個函式, 而express.static為傳送
 * 靜態檔案的方法                                       */

app.listen(port, function() {
/* app.listen為網頁伺服器開啟的函式, 伺服器開啟後會執行
 * 傳入的function                                      */
  console.log('Listening on port :' + port);
});

