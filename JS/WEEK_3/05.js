//action point 1 : 매개변수 다시 쓰기(JS 엔진은 똑같이 이해한다)
//action point 2 : 결과 예상하기
//action point 3 : hoisting 적용해본 후 결과를 다시 예상해보기

// function a(x) {
//   console.log(x);
//   var x;
//   console.log(x);
//   var x = 2;
//   console.log(x);
// }
// a(1);

//<매개변수 적용>

// function a() {
//   var x = 1;
//   console.log(x);
//   var x;
//   console.log(x);
//   var x = 2;
//   console.log(x);
// }
// a(1);

//<호이스팅 적용>

// function a() {
//   var x;
//   var x;
//   var x;

//   x = 1;
//   console.log(x);
//   console.log(x);
//   x = 2;
//   console.log(x);
// }
// a(1);

//action point 1 : 결과 값 예상해보기
//action point 2 : hoisting 적용해본 후 결과를 다시 예상해보기

// function a() {
//   console.log(b);
//   var b = "bbb";
//   console.log(b);
//   function b() {}
//   console.log(b);
// }
// a();

//호이스팅(JS에서 함수안에서 변수들을 수집하는것)을 적용한것

function a() {
  var b;
  function b() {}

  console.log(b);
  b = "bbb";
  console.log(b);
  console.log(b);
}
a();
