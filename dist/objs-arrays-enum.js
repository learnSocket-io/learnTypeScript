"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var numbers;
(function (numbers) {
    numbers[numbers["zero"] = 0] = "zero";
    numbers[numbers["one"] = 1] = "one";
    numbers[numbers["two"] = 2] = "two";
    numbers[numbers["three"] = 3] = "three";
    numbers[numbers["four"] = 4] = "four";
    numbers[numbers["five"] = 5] = "five";
})(numbers || (numbers = {}));
;
const person = {
    name: "hoho",
    age: 30,
    hobbies: ["sports", "game"],
    pup: [5, "hi typeScript"],
    role: numbers.one,
};
let testArr;
testArr = ["hi"];
person.pup.push("isn't error");
console.log(person.name);
