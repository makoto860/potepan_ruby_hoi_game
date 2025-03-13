let currentInput = "";
let operator = "";
let expression = "";
let canInputNumber = true;

function get_calc(element) {
    const value = element.value;
    const totalDisplay = document.getElementById("Total");

    if (value === "AC") {
        currentInput = "";
        operator = "";
        expression = ""; 
        totalDisplay.textContent = "0";
        canInputNumber = true;
        return;
    }

    if (value === "00" && currentInput === "" && expression === "") {
        return;
    }

    if (value === "." && currentInput === "") {
        return;
    }

    if (currentInput.endsWith(".") && (["+", "-", "*", "/", "."].includes(value))) {
        return;
    }

    if (currentInput === "0" && !isNaN(value) && value !== "0") {
        currentInput = value;
        totalDisplay.textContent = expression + currentInput;
        return;
    }

    if (["+", "-", "*", "/"].includes(value)) {
        if (currentInput === "" && expression === "") {
            return;
        }

        if (expression !== "" && currentInput === "") {
            expression = expression.slice(0, -1) + value;
        } else {
            expression += currentInput + value;
        }
        totalDisplay.textContent = expression;
        currentInput = "";
        canInputNumber = true;
        return;
    }

    if (!isNaN(value) || value === ".") {
        if (!canInputNumber) {
            return; 
        }

        if (value === "." && currentInput.includes(".")) {
            return;
        }

        currentInput += value;
        totalDisplay.textContent = expression + currentInput;
        return;
    }

    if (value === "=") {
        if (currentInput !== "") {
            expression += currentInput;
                const result = eval(expression.trim());
                const roundedResult = Math.round(result * 100) / 100;
                totalDisplay.textContent = roundedResult;
                currentInput = roundedResult.toString();
                expression = "";
                canInputNumber = false;
        }
    return
    }  
}