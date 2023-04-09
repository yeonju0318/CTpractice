// 배열


// 1. 생성
// 1-1. 기본 생성
// let fruits = ["사과","바나나","오렌지"];


// 1-2. 크기 지정
let number = new Array(5);

// console.log(fruits.length);

// 2. 요소 접근
// console.log(fruits[0]);

// 3. 배열 메소드
// 3-1. push
// let fruits = ["사과","바나나"];
// fruits.push("오렌지");
// console.log(fruits);

// 3-2. pop(마지막 요소 삭제)
// let fruits = ["사과","바나나"];
// fruits.pop();

// //3-3. shift(첫번째 요소 삭제)
// let fruits = ["사과","바나나","키위"];
// // fruits.shift();

// // 3-4. unshift (앞에 새로 붙이기)
// // fruits.unshift("포도");
// // console.log(fruits);

// // 3-5. splice
// fruits.splice(1,1,"포도");
// console.log(fruits);

// 3-6. slice
let fruits = ["사과","바나나","키위"];
let slicedFruits = fruits.slice(1,2);
console.log(slicedFruits);
