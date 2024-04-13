const ball = document.getElementById("ball");
const reset = document.getElementById("reset");
const scaleUp = document.getElementById("scale-up");
const scaleDown = document.getElementById("scale-down");
document.addEventListener("keydown", handleKeyPress);
reset.addEventListener("click", resetBall);
scaleUp.addEventListener("click", sizeUp);
scaleDown.addEventListener("click", sizeDown);
let position = 0;
let vposition = 0;
let width = 20;
let height = 20;

function handleKeyPress(e) {
  if (e.code === "ArrowLeft") {
    position = position - 10;
  }
  if (e.code === "ArrowRight") {
    position = position + 10;
  }
  if (e.code === "ArrowUp") {
    vposition = vposition - 10;
  }
  if (e.code === "ArrowDown") {
    vposition = vposition + 10;
  }
  if (position < 0) {
    position = 0;
  }
  if (position > 480) {
    position = 480;
  }
  if (vposition < 0) {
    vposition = 0;
  }
  if (vposition > 480) {
    vposition = 480;
  }
  refresh();
}
function sizeUp() {
  width = width + 10;
  height = height + 10;
  if (width > 100) {
    width = 100;
    height = 100;
  }
  refresh();
}
function sizeDown() {
  width = width - 10;
  height = height - 10;
  if (width < 10) {
    width = 10;
    height = 10;
  }
  refresh();
}
function resetBall() {
  position = 0;
  vposition = 0;
  width = 20;
  height = 20;
  refresh();
}
function refresh() {
  ball.style.left = position + "px";
  ball.style.top = vposition + "px";
  ball.style.width = width + "px";
  ball.style.height = height + "px";
}
