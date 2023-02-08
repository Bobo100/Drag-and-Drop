// const ctrLine = document.querySelector(".seperate");
// const left = document.querySelector(".left");
// const screen = document.querySelector(".screen");

// ctrLine.addEventListener("mousedown", function (e) {
//   let currentX = e.pageX;
//   let currentLeft = parseInt(ctrLine.style.left, 10) || 0;
//   console.log(ctrLine.offsetLeft);

//   document.addEventListener("mousemove", mouseMove);
//   document.addEventListener("mouseup", mouseUp);
//   document.addEventListener("mouseout", mouseUp);

//   function mouseMove(e) {
//     let xDiff = currentX - e.pageX;
//     currentLeft -= xDiff;
//     currentX = e.pageX;

//     if (
//       currentLeft > -(screen.offsetWidth / 2) + 20 &&
//       currentLeft <= screen.offsetWidth / 2 - 25
//     ) {
//       ctrLine.style.left = currentLeft + "px";
//       left.style.width = currentLeft + screen.offsetWidth / 2 + "px";
//     }
//   }

//   function mouseUp() {
//     document.removeEventListener("mousemove", mouseMove);
//     document.removeEventListener("mouseup", mouseUp);
//     document.removeEventListener("mouseout", mouseUp);
//   }
// });

//-------------------------------------------------------------
const ctrLine = document.querySelector(".seperate");
const left = document.querySelector(".left");
const screen = document.querySelector(".screen");

let mouseMoveHandler;

ctrLine.addEventListener("mousedown", function (e) {
  let currentX = e.pageX;
  let currentLeft = parseInt(ctrLine.style.left, 10) || 0;

  mouseMoveHandler = function (event) {
    // 滑鼠如果沒有按著，就不會移動
    // 監聽函式結束且沒有回傳值時，會移除事件監聽，這也是一種常見的寫法。
    // 所以，當使用 return 在超出範圍時結束 mousemove 事件監聽函式，就會移除這個事件監聽。
    if (!event.buttons) return;
    let xDiff = currentX - event.pageX;
    currentLeft -= xDiff;
    currentX = event.pageX;

    if (
      currentLeft > -(screen.offsetWidth / 2) + 20 &&
      currentLeft <= screen.offsetWidth / 2 - 25
    ) {
      ctrLine.style.left = currentLeft + "px";
      left.style.width = currentLeft + screen.offsetWidth / 2 + "px";
    } else {
      // 如果超出範圍，就把滑鼠事件移除
      return;
    }
  };
  document.addEventListener("mousemove", mouseMoveHandler);
});
