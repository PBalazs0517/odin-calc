//display var
let displayCurrentNUm = document.getElementById("displayCurrentNUm")

let fullLine = document.getElementById("fullLine")

//technical var
let result = 0;

let currentOperator = "";

// operator buttons

let button1 = document.getElementById("button1")
button1.addEventListener("click", () => { 
    displayCurrentNUm.textContent = "";
    fullLine.textContent = "";
})

let button2 = document.getElementById("button2")
button2.addEventListener("click", () => { displayCurrentNUm.textContent = displayCurrentNUm.textContent.slice(0, -1)})

let button6 = document.getElementById("button6")
button6.addEventListener("click", () => {
    calculate()
    displayCurrentNUm.textContent = "÷";
    currentOperator = "÷"
})

let button10 = document.getElementById("button10")
button10.addEventListener("click", () => {    
    calculate()
    displayCurrentNUm.textContent = "+";
    currentOperator =  "+"
})

let button14 = document.getElementById("button14")
button14.addEventListener("click", () => { 
    calculate()
    displayCurrentNUm.textContent = "-";
    currentOperator = "-"
})

let button17 = document.getElementById("button17")
button17.addEventListener("click", () => { 
    fullLine += displayCurrentNUm + "=";
    displayCurrentNUm = result
    currentOperator = "="
})

let button18 = document.getElementById("button18")
button18.addEventListener("click", () => { 
    calculate()
    displayCurrentNUm.textContent = "+";
})

//number buttons

let button15 = document.getElementById("button15")
button15.addEventListener("click", () => { displayCurrentNUm.textContent += "."})

let button16 = document.getElementById("button16")
button16.addEventListener("click", () => { displayCurrentNUm.textContent += "0"})

let button11 = document.getElementById("button11")
button11.addEventListener("click", () => { displayCurrentNUm.textContent += "1"})

let button12 = document.getElementById("button12")
button12.addEventListener("click", () => { displayCurrentNUm.textContent += "2"})

let button13 = document.getElementById("button13")
button13.addEventListener("click", () => { displayCurrentNUm.textContent += "3"})

let button7 = document.getElementById("button7")
button7.addEventListener("click", () => { displayCurrentNUm.textContent += "4"})

let button8 = document.getElementById("button8")
button8.addEventListener("click", () => { displayCurrentNUm.textContent += "5"})

let button9 = document.getElementById("button9")
button9.addEventListener("click", () => { displayCurrentNUm.textContent += "6"})

let button3 = document.getElementById("button3")
button3.addEventListener("click", () => { displayCurrentNUm.textContent += "7"})

let button4 = document.getElementById("button4")
button4.addEventListener("click", () => { displayCurrentNUm.textContent += "8"})

let button5 = document.getElementById("button5")
button5.addEventListener("click", () => { displayCurrentNUm.textContent += "9"})


// calculates with operator
function calculate() {
    if(currentOperator == "") {
        fullLine.textContent += displayCurrentNUm.textContent;
    }
    if(currentOperator == "÷") {
        fullLine.textContent += displayCurrentNUm.textContent;
        displayCurrentNUm.textContent.slice(0,0)
        result /= displayCurrentNUm.textContent;
        return result;
    }
    if(currentOperator == "X") {
        fullLine.textContent += displayCurrentNUm.textContent;
        displayCurrentNUm.textContent.slice(0,0)
        result *= displayCurrentNUm.textContent;
        return result;
    }
    if(currentOperator == "+") {
        fullLine.textContent += displayCurrentNUm.textContent;
        displayCurrentNUm.textContent.slice(0,0)
        result += displayCurrentNUm.textContent;
        return result;
    }
    if(currentOperator == "-") {
        fullLine.textContent += displayCurrentNUm.textContent;
        displayCurrentNUm.textContent.slice(0,0)
        result -= displayCurrentNUm.textContent;
        return result;
    }
}