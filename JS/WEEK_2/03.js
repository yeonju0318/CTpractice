//단축 속성명 : property shorthand

const name = "nbc";
const age = "30";

//js에서 오브젝트는 key-value 
// 키-밸류가 똑같으면 생략할수있다!!
const obj = {name,age};
const onj1 = { name: name, age: age};


// 전개 구문 = spread operator

// let arr = [1,2,3];

// let newArr = [...arr,4];
// console.log(arr);
// console.log(newArr);


// 객체
// let user = {
//     name: 'nbc',
//     age: 30,
// }

// let user2 = {...user}
// console.log(user);
// console.log(user2);


//나머지 매개변수(rest parameter)
function exampleFunc (a,b,c, ...args){
    console.log(a,b,c);
    console.log(...args);
}

exampleFunc(1,2,3,4,5,6,7);


//템플릿 리터럴(Template Literal)
//백틱은 멀티라인을 지원한다!

console.log(`Hello World ${3 + 3}`);