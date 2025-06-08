function generateHeroName(name) {
  const adjective = ["Unstoppable", "Incredible", "Amazing", "Fantastic"];
  const power = ["Mighty", "Swift", "Brave", "Cunning"];
  let adj = adjective[Math.floor(Math.random() * adjective.length)];
  let pwr = power[Math.floor(Math.random() * power.length)];
  return adj + " " + name + " the " + pwr;
}

const headingText = document.getElementById("heading");
const welcomes = [
  "Hello",
  "Whassup",
  "Ey up, Duck",
  "Howdy there",
  "G'Day",
  "Alright Geezer",
];
let welcome = welcomes[Math.floor(Math.random() * welcomes.length)];

function handleForm(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const result = document.getElementById("result");
  if (name) {
    result.textContent = "Your superhero name is " + generateHeroName(name);
    headingText.textContent = `${welcome} ${name}`;
  }
}

function welcomeText() {
  console.log(typeof welcome);
  headingText.textContent = welcome;
}
welcomeText();

function showTotal() {
  const numberResult = document.getElementById("numberResult");
  let tip = "8.5";
  let total = 50;
  let tax = 1.2;
  let subTotal = total * tax;
  let orderTotal = parseFloat(tip) + subTotal;
  if (orderTotal) {
    numberResult.textContent = `Your order total is: ${orderTotal}`;
  }
}
showTotal();

const personalDetails = {
  name: "Mark Adams",
  address: "34 Napier Road",
  city: "Heaton Moor",
  postcode: "SK4 4HG",
};
const deetsContainer = document.getElementById("deets");
let deets = `
    ${personalDetails.name},
    ${personalDetails.address},
    ${personalDetails.city},
    ${personalDetails.postcode}
    `;
deetsContainer.textContent = deets;

const favouriteCities = [
  "Manchester",
  "London",
  "New York",
  "Kuala Lumpur",
  "Bangkok",
  "Singapore",
];
const index = document.getElementById("arrayindex");
randIndex = Math.floor(Math.random() * favouriteCities.length);
index.textContent = favouriteCities[randIndex];

const fruitColour = {
  colour: ["red", "blue", "orange", "purple", "yellow", "green"],
  fruit: ["apple", "banana", "orange", "kiwi", "tomato", "pear"],
  shop: { name: "Tesco", type: "Extra" },
};
let fruitCol = document.getElementById("colour");
let fruitType = document.getElementById("fruit");
randColour = Math.floor(Math.random() * fruitColour.colour.length);
randFruit = Math.floor(Math.random() * fruitColour.fruit.length);
fruitCol.textContent = fruitColour.colour[randColour];
fruitType.textContent =
  fruitColour.fruit[randFruit] + " From " + fruitColour.shop.name;
