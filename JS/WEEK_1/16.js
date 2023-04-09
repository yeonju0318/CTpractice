// for, while => ~동안 : 반복문

// for (초기값; 조건식;증감식) {

// }

//i라는 변수는 0부터 시작할꺼야
//i라는 변수가 10에 도달하기전까지 계속할꺼야
//i라는 변수는 한 사이클이 돌고 나면 1을 더할꺼야

// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

// // 배열과 for문은 짝꿍이다.
// const arr = ["one","two","three","four","five"];
// for (let i = 0; i < arr.length; i++){
//     console.log(i);
//     console.log(arr[i]);
// }

// ex : 0부터 10까지의 수 중에서 2의 배수만 console.log로 출력하는 예시

for (let i = 0; i < 11; i++){
    if ( i >=2){
    if ( i % 2 === 0){
        console.log(i + '는 2의 배수입니다!!');
    }
}
}

//for ~in 문
// 객체의 속성을 출력하는 문법

// let person = {
//     name: 'John',
//     age: 30,
//     gender: "male",
// };

// for(let key in person){
//     console.log(key + ": "+person[key]);
// }