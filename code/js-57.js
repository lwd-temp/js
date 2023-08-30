(function (w) {
  if (typeof w.continueClickTimer !== 'undefined') {
    clearInterval(w.continueClickTimer);
    w.continueClickTimer = undefined;
    console.log("关闭");
    return;
  }

  console.log("开启");
  w.continueClickTimer = setInterval(() => {
    w.ec.wait.continueWait()
  }, 10000);
})(window);
