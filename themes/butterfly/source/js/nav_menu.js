// 返回顶部 显示网页阅读进度
window.onscroll = percent; // 执行函数
// 页面百分比
function percent() {
  let a = document.documentElement.scrollTop || window.pageYOffset, // 卷去高度
    b =
      Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.body.clientHeight,
        document.documentElement.clientHeight
      ) - document.documentElement.clientHeight, // 整个网页高度 减去 可视高度
    result = Math.round((a / b) * 100), // 计算百分比
    btn = document.querySelector("#percent"); // 获取图标
  result <= 99 || (result = 99), (btn.innerHTML = result);
}
document.getElementById("page-name").innerText = document.title.split(" | 随风小破站")[0]; 
// 检测按键
window.onkeydown = function (e) {
  if (e.keyCode === 123) {
    btf.snackbarShow('开发者模式已打开，请遵循GPL协议', false, 3000)
  }
}
/** 监听copy事件 */
document.addEventListener("copy",function(e){
  //复制的内容
  btf.snackbarShow('复制成功，请遵循GPL协议', false, 3000)
})
!function(e){function o(s){if(t[s])return t[s].exports;var i=t[s]={exports:{},id:s,loaded:!1};return e[s].call(i.exports,i,i.exports,o),i.loaded=!0,i.exports}var t={};return o.m=e,o.c=t,o.p="",o(0)}([function(e,o){"use strict";!function(){var e=void 0;if(window.console&&"undefined"!=typeof console.log){try{(window.parent.__has_console_security_message||window.top.__has_console_security_message)&&(e=!0)}catch(o){e=!0}if(window.__has_console_security_message||e)return;var o="",t="",s="",i=[t," ",s].join("");/msie/gi.test(navigator.userAgent)?(console.log(o),console.log(i)):console.log("%c blog.p5sf.com %c Copyright \xa9 2004-%s\n%c"+o+"\n %c"+i+"\n ",'font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:64px;color:#00bbee;-webkit-text-fill-color:#00bbee;-webkit-text-stroke: 1px #00bbee;',"font-size:12px;color:#999999;",(new Date).getFullYear(),"color:#333;font-size:16px;","font-size:12px;"),window.__has_console_security_message=!0}}()}]);

