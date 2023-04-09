//실행 컨텍스트(=객체) 예시 코드
// 콜스택

var a = 1;
function outer() {
  function inner() {
    console.log(a);
    var a = 3;
  }
  inner();
  //   console.log(a);
}
outer();
console.log(a);
