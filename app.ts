import { publicDecrypt } from "crypto";

// enum의 요소는 기본적으로 0번의 인덱스 부터 시작하지만
// {zero=2, one, two=100, three=200, four=600, five};
// 이런식으로 설정이 가능하며, 입력하지 않은 one의 경우 앞에 인덱스의 +1 로 작동하는 것 같다.
// type은 number로 작동한다.
enum numbers {zero, one, two, three, four, five};

// const person: {
//     name: string;
//     age : number;
//     hobbies: string[] // 일반적인 배열에 대한 타입지정
//     pup: [number, string] // tuple type 일반적인 배열과 다르게 인덱스의 갯수와, 타입, 타입이 대한 순서가 정의된 배
// }   
const person = {
    name : "hoho",
    age : 30,
    hobbies: ["sports", "game"],
    pup: [5, "hi typeScript"],
    role: numbers.one,
};

let testArr: string[];
//testArr = "hi"; //string 에러
testArr = ["hi"];

person.pup.push("isn't error") // tuple type이 순서와 요소의 개수가 정해져 있지만, push는 예외처리된다.

console.log(person.name)


// 일반적인 객체의 형태.
// const person: {} = {     // ": {}" 객체를 생성하는것이 아닌 객체라고 타입을 지정하는 것.
//     name : "hoho",
//     age : 30,
// };

//두 타입의 객체가 비슷해 보일 수 있으나 문법적으로 알아두면 좋다고 생각한다.

// 타입을 추론한 객체의 형태.
// const person: {
//     name : string;
//     age : number;
// };