// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

function minToSec(minutes) {
  return minutes * 60;
}

console.log(minToSec(3))
console.log(minToSec(2))

function aZaroven(a, b) {
  return a && b;
}

console.log(aZaroven(true, true))
console.log(aZaroven(false, true))