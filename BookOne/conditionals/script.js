const body = document.getElementById("body");
function handleForm(event) {
  event.preventDefault();
  const checkbox = document.getElementById("toggle");
  if (checkbox.checked) {
    body.classList.add("toggled");
  } else {
    body.classList.remove("toggled");
  }
}

const msg = document.getElementById("dayMessage");
const date = new Date();
const day = date.getDay();
const dayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
if (day === 0 || day === 6) {
  const message = `It's ${dayNames[day]}! Have a great weekend.`;
  msg.textContent = message;
} else {
  const message = `It's ${dayNames[day]}, bad luck, enjoy the working week.`;
  msg.textContent = message;
}

const sat = document.getElementById("isSat");
const saturday = day === 6 ? "YES its saturday!" : "Boo its not Saturday";
sat.textContent = saturday;

let switchDayVal;
switch (day) {
  case 0:
    switchDayVal = dayNames[day] + ". The day of rest.";
    break;
  case 1:
    switchDayVal = dayNames[day] + ". Oooh bad luck.";
    break;
  case 2:
    switchDayVal = dayNames[day] + ". Not too bad, but certainly not great.";
    break;
  case 3:
    switchDayVal = dayNames[day] + ". Midweek. Not too shabby.";
    break;
  case 4:
    switchDayVal = dayNames[day] + ". Getting better.";
    break;
  case 5:
    switchDayVal = dayNames[day] + ". Nearly there.";
    break;
  case 6:
    switchDayVal = dayNames[day] + ". Wooooo, hope it stays dry.";
    break;
  default:
    switchDayVal = "Can't get the current day, sorry.";
}
const switcher = document.getElementById("switchDay");
switcher.textContent = switchDayVal;
