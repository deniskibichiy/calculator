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

for (let i = 0; i <= 20; i++) {
    let button = document.createElement("button");
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
    }
    //if (i == 15) {
        //button.innerHTML = "Clear"
  //  }
    
    container.appendChild(button);
}