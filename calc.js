let display = document.getElementById("display");

// Add value to display
function appendValue(value) {
    if (display.innerText === "0") {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
}

// Clear all
function clearDisplay() {
    display.innerText = "0";
}

// Backspace (remove last character)
function backspace() {
    let current = display.innerText;

    if (current.length > 1) {
        display.innerText = current.slice(0, -1);
    } else {
        display.innerText = "0";
    }
}

// Calculate result
function calculate() {
    try {
        display.innerText = eval(display.innerText);
    } catch {
        display.innerText = "Error";
    }
}

// Keyboard support
document.addEventListener("keydown", function(event) {
    if (!isNaN(event.key) || "+-*/.".includes(event.key)) {
        appendValue(event.key);
    } 
    else if (event.key === "Enter") {
        calculate();
    } 
    else if (event.key === "Backspace") {
        backspace();
    }
});