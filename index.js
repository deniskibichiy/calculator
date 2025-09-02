const container = document.querySelector("#container");
container.style.cssText = "width: 400px; height: 500px"
const resultsDisplay = document.createElement("div");
resultsDisplay.style.cssText = "width: 100%; height: 100px; border: 1px solid grey"
container.appendChild(resultsDisplay);
function add (a,b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply (a,b) {
    return a * b;
}

function divide (a,b) {
    return a/b;
}

console.log(multiply(9,3));

let operand1, operand2, operator;


function operate (a, b, c) {
    return a(b,c);
}

