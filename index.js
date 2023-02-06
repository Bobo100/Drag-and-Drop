const ctrLine = document.querySelector(".seperate");
const left = document.querySelector(".left");
const screen = document.querySelector(".screen");

ctrLine.addEventListener("mousedown", function (e) {
  let currentX = e.pageX;
  let currentLeft = parseInt(ctrLine.style.left, 10) || 0;
  console.log(ctrLine.offsetLeft);

  document.addEventListener("mousemove", mouseMove);
  document.addEventListener("mouseup", mouseUp);
  document.addEventListener("mouseout", mouseUp);

  function mouseMove(e) {
    let xDiff = currentX - e.pageX;
    currentLeft -= xDiff;
    currentX = e.pageX;

    if (
      currentLeft > -(screen.offsetWidth / 2) + 20 &&
      currentLeft <= screen.offsetWidth / 2 - 25
    ) {
      ctrLine.style.left = currentLeft + "px";
      left.style.width = currentLeft + screen.offsetWidth / 2 + "px";
    }
  }

  function mouseUp() {
    document.removeEventListener("mousemove", mouseMove);
    document.removeEventListener("mouseup", mouseUp);
    document.removeEventListener("mouseout", mouseUp);
  }
});
