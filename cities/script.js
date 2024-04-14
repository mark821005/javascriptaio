const cities = [
  "Manchester",
  "London",
  "Birmingham",
  "Leeds",
  "Bristol",
  "Liverpool",
];
const button = document.getElementById("button");
const result = document.getElementById("result");
button.addEventListener("click", randomise);

function randomise() {
  const random = Math.floor(Math.random() * cities.length);
  let city = cities[random];
  result.innerHTML = city;
}

Hello Aline