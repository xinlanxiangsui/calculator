$(function () {
  // 鼠标悬浮更换颜色
  $('th,td').on("mouseenter", function () {
    $(this).addClass("selected");
  }).on("mouseout", function () {
    $(this).removeClass("selected");
  })
  $('.blue').hover(function () {
    $(this).addClass("blueSelected");
    $(this).removeClass("selected")
  }, function () {
    $(this).removeClass("blueSelected")
  })

  // 鼠标点击事件
  $('th,.add,.sub,.divide,.multi,.remainder').on("click", function () {
    let s = $(this).text();
    if (s != "=") {
      // 去掉前面的0
      if ($('.show').text() == "0") {
        $('.show').text(s);
        // 乘号替换
      } else if (s == "×") {
        $('.show').append("*");
        // 除号替换
      } else if (s == "÷") {
        $('.show').append("/");
      } else {
        $('.show').append(s);
      }
    }
  })

  // 等号触发
  $('.equal').on("click", function () {
    try {
      let res = eval($('.show').text());
      let length;
      try {
        length = res.toString().split(".")[1].length;
      } catch (e) {}
      if (length > 2) {
        $('.number').text(res.toFixed(2))
      } else {
        $('.number').text(res);
      }
    } catch (e) {
      alert("您的输入不合法，请重新输入");
      reset();
    }
  })

  // 退格触发
  $('.back').parent().on("click", function () {
    $('.show').text($('.show').text().substr(0, $('.show').text().length - 1));
    backToZero();
  })

  // 重置方法
  function reset() {
    $('.show').text("0");
    $('.number').text("0");
  }
  $('.reset').on("click", function () {
    reset();
  })
  // 如果退格退除了所有元素，则显示0
  function backToZero() {
    if ($('.show').text().length == 0) {
      $('.show').text("0");
    }
  }
});
