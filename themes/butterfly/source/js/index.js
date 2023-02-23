//首页大卡片恢复显示
$(".div-card3").hover(function () {
}, function () {
  hoverOnCommentBarrage = false;
  document.getElementById("todayCard").classList.remove('hide');
  document.getElementById('todayCard').style.zIndex = 1;
});

  function buttonClick() {
    if (document.getElementById("todayCard")) {
      document.getElementById("todayCard").classList.add('hide');
    }
  }
