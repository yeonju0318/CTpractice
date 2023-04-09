// // //구조분해할당
// // // de = not
// // // structure = 구조
// // // 배열이나, 객체의 속성

// // // 배열의 경우
// // let [value1,value2] = [1, "new"]
// // console.log('1', value1);
// // console.log('2', value2);

// // let arr = ["value1","value2","value3"];
// // let [a,b,c,d] = arr;

// // console.log(a)
// // console.log(b)
// // console.log(c)

// // //객체인경우

// // let {name,age} = {
// //     name: "nbc",
// //     age: 30,
// // };

// //새로운 이름으로 할당

let user = {
    name: "nbc",
    age: 30,
};

let { name, age,birthday = "today"} = user;
console.log(name);
console.log(age);
console.log(birthday);
