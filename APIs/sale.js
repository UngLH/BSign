var datHang = document.querySelector(
  '.stardust-button.stardust-button--primary.stardust-button--large.gG-FcK',
); // Nút đặt hàng
var apDung = document.querySelector('.stardust-button._3Y9kTz._3Ilx46'); 
apDung.click()
// Nút áp dụng
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
console.log(hourVoucher);
console.log(minuteVoucher);
console.log(secondDefault);
console.log(milliDefault);
function myStopFunction() {
  clearInterval(myInterval);
}
var hourVoucher = Number(timeInput.slice(0, 2)),
  minuteVoucher = Number(timeInput.slice(3, 5));
var secondDefault = secondInput,
  milliDefault = millisecondInput;

function sleep(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}
function sanSale() {
  var now = new Date();
  var hour = now.getHours();
  var minute = now.getMinutes();
  var second = now.getSeconds();
  var millisecond = now.getMilliseconds();

  
  if (
    hour == hourVoucher &&
    minute == minuteVoucher &&
    second == secondDefault &&
    millisecond >= milliDefault
  ) {
    clearInterval(myInterval);
    apDung.click();
    sleep(1200).then(() => {
      datHang.click();
    });
    waitForElm('.stardust-popup-button.stardust-popup-button--main').then(
      async elm => {
        await elm.click();
        elm.click()
        console.log("click");  
      },
    );
    waitForElm('.stardust-popup-button.stardust-popup-button--main').then(
      async elm => {
        await elm.click();
        elm.click()
        console.log("click");  
      },
    );
    waitForElm('.stardust-popup-button.stardust-popup-button--main').then(
      async elm => {
        await elm.click();
        elm.click()
        console.log("click");  
      },
    );
  }
}
myInterval = setInterval(sanSale, 10);

// xoa don hang chua mua:
var xoa = document.querySelectorAll('.Lur7Ey');
xoa.forEach(element => {
  element.click();
});
