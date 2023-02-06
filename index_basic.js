const separator = document.querySelector(".separator");
let isDragging = false;
let currentX;
let separatorLeft;
let AWidth;

// 設定左右邊界，避免分隔線超出頁面
let leftBoundary = 0;
let rightBoundary = window.innerWidth;

// 滑鼠按下時，設定 isDragging 為 true，並記錄滑鼠位置、分隔線位置、A 寬度

// offsetLeft是指元素左上角到父元素左上角的距離，包含border和padding，不包含margin，但是如果父元素有設定position，則不包含父元素的border和padding，只包含父元素的margin。
separator.addEventListener("mousedown", (e) => {
  isDragging = true;
  currentX = e.clientX;
  separatorLeft = separator.offsetLeft;
  // A的寬度就是A的offsetWidth
  AWidth = document.querySelector(".A").offsetWidth;
});

// 滑鼠放開時，設定 isDragging 為 false
document.addEventListener("mouseup", () => {
  isDragging = false;
});

// 滑鼠移動時，如果 isDragging 為 true，則計算滑鼠移動的距離，並更新 A 寬度、B 寬度、分隔線位置
document.addEventListener("mousemove", (e) => {
  if (!isDragging) return;
  const distance = e.clientX - currentX;
  const newSeparatorLeft = AWidth + distance;
  if (newSeparatorLeft < leftBoundary || newSeparatorLeft > rightBoundary)
    return;
  document.querySelector(".A").style.width = `${newSeparatorLeft}px`;
  // B 寬度始終是整個頁面寬度減去 A 寬度
  document.querySelector(
    ".B"
  ).style.width = `calc(100% - ${newSeparatorLeft}px)`;
  separator.style.left = `${separatorLeft + distance}px`;
});
