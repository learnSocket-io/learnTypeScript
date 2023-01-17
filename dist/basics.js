"use strict";
function add(num1, num2, showResult, someSpring) {
    if (showResult) {
        const result = num1 + num2;
        console.log(someSpring + result);
    }
    else {
        return num1 + num2;
    }
}
let number1;
number1 = 5;
const number2 = 2.8;
const printResult = true;
const someSpring = "result is:";
add(number1, number2, printResult, someSpring);
