
  var timeInput = prompt(
    'Nhập vào thời gian săn sale (ví dụ voucher bắt đầu lúc 00h00p thì nhập là 23:59):',
  );
  var secondInput = prompt(
    'Nhập vào thời gian mã giảm giá xuất hiện: (ví dụ thời gian mã giảm giá xuất hiện là 21:00:20s thì nhập 19. \n Lưu ý độ trễ của đồng hồ so máy tính so với thời gian thực tế(Tính toán thời gian trễ cho phù hợp!))',
  );
  var millisecondInput = prompt("Nhập vào mili giây. Ví dụ thời gian bắt đầu mã giảm giá là: 21:00:00s thì nhập trong khoảng 700 - 900. Lưu ý độ trễ của đồng hồ máy tính so với thời gian thực")
  function waitForElm(selector) {
    return new Promise(resolve => {
      if (document.querySelector(selector)) {
        return resolve(document.querySelector(selector));
      }
      const observer = new MutationObserver(mutations => {
        if (document.querySelector(selector)) {
          resolve(document.querySelector(selector));
          observer.disconnect();
        }
      });
      observer.observe(document.body, {
        childList: true,
        subtree: true,
      });
    });
  }

  var hourVoucher = Number(timeInput.slice(0, 2)),
    minuteVoucher = Number(timeInput.slice(3, 5));
  var secondDefault = secondInput;

  function testInterval(){
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    var millisecond = now.getMilliseconds();
    console.log("hello")
    if (
      hour == hourVoucher &&
      minute == minuteVoucher &&
      second == secondDefault &&
      millisecond >= 900
    ) {
      waitForElm(".stardust-button._3Y9kTz._3Ilx46").then(
        () => {
            myStopFunctionTest();
            console.log("Clear interval");
          
        }
      )
    }
  }
  myIntervalTest = setInterval(testInterval, 10);
  function myStopFunctionTest() {
    clearInterval(myIntervalTest);
  }