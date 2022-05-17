//display 
let currentTask = document.getElementById("currentTask")

let displayCurrentChar = document.getElementById("displayCurrentChar")

//technilcal var

let result = 0;

let firstArg = undefined;
let secondArg = undefined;
let thirdArg = undefined; 
let equalSign = false;
let equalPress = false;

// buttons (operator)
let clearButton = document.getElementById("button1");
clearButton.addEventListener("click", ()=> {
    currentTask.textContent = "";
    displayCurrentChar.textContent = "";
    firstArg = undefined;
    secondArg = undefined;
    thirdArg = undefined; 
    equalSign = false; 
    equalPress = false;
});
let deleteButton = document.getElementById("button2");
deleteButton.addEventListener("click", ()=> {
    displayCurrentChar.textContent = displayCurrentChar.textContent.slice(0, -1)
});
let divButton = document.getElementById("button6");
divButton.addEventListener("click", ()=> {
    checkForAllFourArg("/")
});
let multButton = document.getElementById("button10");
multButton.addEventListener("click", ()=> {
    checkForAllFourArg("*")
});
let subButton = document.getElementById("button14");
subButton.addEventListener("click", ()=> {
    checkForAllFourArg("-")
});
let equalButton = document.getElementById("button17");
equalButton.addEventListener("click", ()=> {
    equalSign = true;
    checkForAllFourArg("=")
});
let addButton = document.getElementById("button18");
addButton.addEventListener("click", ()=> {
    checkForAllFourArg("+")
});

//buttons (num and dot)
let dotButton = document.getElementById("button15");
dotButton.addEventListener("click", ()=> {
    resetToUndefined()
    if(displayCurrentChar.textContent.length < 14) {
        displayCurrentChar.textContent += "."
    }
})
let num0 = document.getElementById("button16");
num0.addEventListener("click", ()=> {
    resetToUndefined()
    if(displayCurrentChar.textContent.length < 14) {
        displayCurrentChar.textContent += "0"
    }
})
let num1 = document.getElementById("button11");
num1.addEventListener("click", ()=> {
    resetToUndefined()
    if(displayCurrentChar.textContent.length < 14) {
        displayCurrentChar.textContent += "1"
    }
})
let num2 = document.getElementById("button12");
num2.addEventListener("click", ()=> {
    resetToUndefined()
    if(displayCurrentChar.textContent.length < 14) {
        displayCurrentChar.textContent += "2"
    }
})
let num3 = document.getElementById("button13");
num3.addEventListener("click", ()=> {
    resetToUndefined()
    if(displayCurrentChar.textContent.length < 14) {
        displayCurrentChar.textContent += "3"
    }
})
let num4 = document.getElementById("button7");
num4.addEventListener("click", ()=> {
    resetToUndefined()
    if(displayCurrentChar.textContent.length < 14) {
        displayCurrentChar.textContent += "4"
    }
})
let num5 = document.getElementById("button8");
num5.addEventListener("click", ()=> {
    resetToUndefined()
    if(displayCurrentChar.textContent.length < 14) {
        displayCurrentChar.textContent += "5"
    }
})
let num6 = document.getElementById("button9");
num6.addEventListener("click", ()=> {
    resetToUndefined()
    if(displayCurrentChar.textContent.length < 14) {
        displayCurrentChar.textContent += "6"
    }
})
let num7 = document.getElementById("button3");
num7.addEventListener("click", ()=> {
    resetToUndefined()
    if(displayCurrentChar.textContent.length < 14) {
        displayCurrentChar.textContent += "7"
    }
})
let num8 = document.getElementById("button4");
num8.addEventListener("click", ()=> {
    resetToUndefined()
    if(displayCurrentChar.textContent.length < 14) {
        displayCurrentChar.textContent += "8"
    }
})
let num9 = document.getElementById("button5");
num9.addEventListener("click", ()=> {
    resetToUndefined()
    if(displayCurrentChar.textContent.length < 14) {
        displayCurrentChar.textContent += "9"
    }
})

// calculate
    // check all for argument (firstArg, secondArg, thirdArg and equalSign) and runs the code fit for the situation
function checkForAllFourArg(operatorInput) {
    if(firstArg != undefined && secondArg != undefined && thirdArg == undefined && equalSign == false) {
        console.log("1");
        thirdArg = displayCurrentChar.textContent;
        calcOperation()
        displayCurrentChar.textContent = "";
        firstArg = result;
        secondArg = operatorInput;
        thirdArg = undefined;
        currentTask.textContent = firstArg + " " + secondArg + " ";
        displayCurrentChar.textContent = "";
        equalPress = false;
        return [firstArg, secondArg, thirdArg, equalPress]
    } else if(firstArg != undefined && secondArg != undefined && thirdArg == undefined && equalSign == true){
        console.log("2");
        thirdArg = displayCurrentChar.textContent;
        calcOperation()
        displayCurrentChar.textContent = "";
        currentTask.textContent = result;
        firstArg = result;
        secondArg = undefined;
        thirdArg = undefined;
        equalSign = false;
        equalPress = true;
        displayCurrentChar.textContent = "";
        return [firstArg, secondArg, thirdArg, equalSign, equalPress]
    } else if( firstArg == undefined && secondArg == undefined && thirdArg == undefined && equalSign == false){
        console.log("3");
        firstArg = displayCurrentChar.textContent;
        secondArg = operatorInput;
        currentTask.textContent = firstArg + " " + secondArg + " ";
        displayCurrentChar.textContent = "";
        equalPress = false;
        return [firstArg, secondArg, equalPress]
    } else if(firstArg != undefined && secondArg == undefined && thirdArg == undefined && equalSign == false){
        secondArg = operatorInput;
        currentTask.textContent = firstArg + " " + secondArg + " ";
        equalPress = false;
        return [secondArg, equalPress]; 
    } else {
        console.log("4");
        currentTask.textContent = "ERROR";
        displayCurrentChar.textContent = "";
        equalSign = false;
        equalPress = false;
        return [equalSign, equalPress];
    }
}

    //calcuates the operation
function calcOperation(){
    let stringToBeCalculated = Number(firstArg) + " " + secondArg  + " "  + Number(thirdArg);
    result = eval(stringToBeCalculated);
    return result;
}

    //if you input a number after pressing an = than result resets to undefined
function resetToUndefined(){
    if (equalPress == true) {
        currentTask.textContent = "";
        firstArg = undefined;
        secondArg = undefined;
        thirdArg = undefined; 
        equalSign = false; 
        result = 0;
        equalPress = false;
        return [equalPress, result, equalSign, thirdArg, secondArg, firstArg]
    }
}

//keyboard support
document.addEventListener("keypress", e =>{
    if( e.key == "0" || e.key == "1" || e.key == "2" || e.key == "3" || e.key == "4" || e.key == "5" || e.key == "6" || e.key == "7" || e.key == "8" || e.key == "9" || e.key == ".") {
        if(displayCurrentChar.textContent.length < 14){
            displayCurrentChar.textContent += e.key;
            equalPress = false;
        }
    }
    if( e.key == "+" || e.key == "/" || e.key == "*" || e.key == "-" ){
        checkForAllFourArg(e.key)
    }
    if( e.key == "=") {
        equalSign = true;
        checkForAllFourArg("=");
    }
})

