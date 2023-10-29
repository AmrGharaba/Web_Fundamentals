var input1 = "", input2 = "", result = 0;
var operator = 0;
let display = document.querySelector("#display")



// input num1 and num2 values for operation
function press(element) {

    if (operator == 0) {
        input1 += element.innerText;
        display.innerText = input1;

    }
    else {
        input2 += element.innerText;
        display.innerText = input2;
    }
    console.log("input1 :" + input1);
    console.log("input2 :" + input2);
}

// input operation type
function setOP(element) {
    operator = element.innerText;
    if (input1 == "") input1 = "0";
    if(input2 != "") calculate();
    console.log(operator);
    console.log("input1 :" + input1);
    console.log("input2 :" + input2);

}

// calculate at equals operand
function calculate() {
    if (operator === '÷') {
        result = parseFloat(input1) / parseFloat(input2);
    }
    else if (operator === '×') {
        result = parseFloat(input1) * parseFloat(input2);
    }
    else if (operator === '−') {
        result = parseFloat(input1) - parseFloat(input2);
    }
    else if (operator === '+') {
        result = parseFloat(input1) + parseFloat(input2);
    }

    input1 = result.toString();
    input2 = "";
    display.innerText = result;
    console.log("display :" + display.innerText);

    console.log(result);
}
function clr(element) {
    input1 = "", input2 = "", result = 0, operator = 0, display.innerText = 0;
}