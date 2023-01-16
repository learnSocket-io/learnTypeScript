function add(num1, num2, showResult, someSpring) {
    if (showResult) {
        var result = num1 + num2;
        console.log(someSpring + result);
    }
    else {
        return num1 + num2;
    }
}
var number1 = 5;
var number2 = 2.8;
var printResult = true;
var someSpring = "result is:";
add(number1, number2, printResult, someSpring);
