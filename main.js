console.log("it works")

const first = document.querySelector("#first");
const second = document.querySelector('#second');

first.addEventListener("mouseenter", change);

function change() {
    first.style.backgroundColor = 'yellow';
}