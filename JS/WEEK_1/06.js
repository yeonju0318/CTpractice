//연산자(+,-+*,/,%)

// console.log(1 + 1);
// console.log(1 + "1");

// console.log(1 - "2");
// console.log(1 - 2);

// console.log(2 * 3);

// console.log(4 / 2);
// console.log("4" / 2)


// console.log(5%2);

// 할당 연산자 (assingment)
// let x = 10;
// console.log(x);

// x += 5;
// console.log(x);

// x -= 20;
// console.log(x);

//비교 연산자★ -->true또는 false를 반환하는 연산자

//1. 일치 연산자(===)
//타입까지 일치해야 true를 반환하는 연산자
console.log(2 === 2);
console.log("2" === 2);

//불일치 연산자(!==)
//타입까지 일치해야 false를 반환하는 연산자
console.log(2 !== 2);

//작다 연산자(<), 작거나 같다 연산자(<=)
console.log("-----")
console.log(2 < 3);

//논리 연산자
//논리곱 연산자: 모두 true일때 true 반환
console.log(true && true);
console.log(true && false);

//논리합 연산자 : 두 값 중 하나라도 true인경우 true로 반환
console.log(true || true);

//논리 부정 연산자 : 값을 반대로 바꿈

let a = true;
console.log(!a);

//삼항 연산자★★
//조건에 따라 값을 선택한다

let x = 10;
let result = (x > 5) ? "크다" : "작다";
console.log("-----------");
console.log(result);

console.log("-----------");
let y = 20;
let answer = (y < 10 ? "작다" : "크다");
console.log(answer);

//타입 연산자(typeof)
console.log(typeof "5");

