const container = document.querySelector("#container");
container.style.cssText = ""
const resultsDisplay = document.createElement("div");
resultsDisplay.classList.add("resultsDisplay");
resultsDisplay.style.cssText = ""
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

function clear () {
    resultsDisplay.textContent = ""
}

//console.log(multiply(9,3));

let operand1, operand2, operator;


function operate (a, b, c) {
    return a(b,c);
}

for (let i = 0; i <= 20; i++) {
    var button = document.createElement("button");
    if( i % 5 == 0) {
        button.style.cssText = "border: 0; height: 0; width: 100%";
    }
    if(i < 5 && i % 5 !== 0) {
        button.innerText = i -1;
    }
    if (i > 5 && i < 10) {
        button.innerHTML = i-2;
    }
    if(i > 10 && i < 15) {
        button.innerHTML = i-3;
    }
    if(i > 12 && i < 14) {
        button.innerHTML = i -4;
    }

    if(i ==13) {
        button.innerHTML = "/"
    } 
    if (i == 14) {
        button.innerHTML = "+"
    }
    if (i == 16) {
        button.innerHTML = "-"
    }
    if (i == 17) {
        button.innerHTML = "*"
    }
    if (i == 18) {
        button.innerHTML = "="
    }
    if (i == 19) {
        button.innerHTML = "Clear"
        button.classList.add("empty")
    }
    
    container.appendChild(button);
}

//function to add event listeners and populate the keys
 let clicked =[];
 let secondOperand = [];
container.addEventListener("click", (event) => {
    let pressedButton;
    pressedButton = event.target.innerHTML;
    if(pressedButton === "/" || pressedButton === "*" || pressedButton === "-" || pressedButton === "+") {
    operand1 = pressedNumber;
    clicked.length =0;

        switch(pressedButton) {
            case "*":
                operator = multiply;
                resultsDisplay.textContent = "*";
                break;
            case "+":
                operator = add;
                resultsDisplay.textContent = "+";
                break;
            case "/":
                operator = divide;
                resultsDisplay.textContent = "/";
                break;
            case "-":
                operator = subtract;
                resultsDisplay.textContent = "-";
                break;
            default:
        }
        
    }

   else if (pressedButton === "Clear") {
        resultsDisplay.textContent = " ";
        clicked.length = 0;
        operand1 = 0;
        secondOperand.length = 0;
    }
    else if (pressedButton && pressedButton !== "=") {
        clicked.push(pressedButton);
        resultsDisplay.textContent = pressedButton;
        pressedNumber = clicked.reduce((pressedNumber, item) => `${pressedNumber}${item}`);
        pressedNumber = parseInt(pressedNumber);
        resultsDisplay.textContent = pressedNumber;
    }
    if (pressedButton && operator && operand1 && pressedButton !== "/" && pressedButton !== "*" && pressedButton !== "-" && pressedButton !== "+" ) {
        secondOperand.push(pressedButton);
        secondPressedNumber = secondOperand.reduce((secondPressedNumber, item) => `${secondPressedNumber}${item}`);
    }
    if(pressedButton === "=" && pressedButton !== "/" && pressedButton !== "*" && pressedButton !== "-" && pressedButton !== "+" && operator !== divide) {
        //secondOperand.length = 0;
        operand2 = parseInt(secondPressedNumber);
        let result = operator(operand1, operand2);
        resultsDisplay.textContent = result;
    } else if(pressedButton === "=" && operator == divide ) {
        operand2 = parseInt(secondPressedNumber);
        if (operand2 === 0) {
            resultsDisplay.textContent = "Forbidden operations"
        }
        result = operator(operand1, operand2);
        resultsDisplay.textContent = result;
    }


})
