const div = document.getElementById("rootDiv");
const button = document.getElementById("button");
button.addEventListener("click", refresh);

function changeColour() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  console.log(color);
  return color;
}

function refresh() {
  div.style.backgroundColor = changeColour();
}
