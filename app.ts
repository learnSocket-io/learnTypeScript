const person: {
    name: string;
    age : number
} = {
    name : "hoho",
    age : 30,
};

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