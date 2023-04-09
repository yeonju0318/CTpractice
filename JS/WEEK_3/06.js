// 함수 선언문. 함수명 a가 곧 변수명
// function 정의부만 존재, 할당 명령이 없는 경우
function a() {
  /* ... */
}
a(); // 실행 ok

// 함수 표현식. 정의한 function을 별도 변수에 할당하는 경우
// (1) 익명함수표현식 : 변수명 b가 곧 변수명(일반적 case에요)
var b = function () {
  /* ... */
};
b(); // 실행 ok

//중간정리
// 실행컨텍스트=실행할 코드에 제공할 환경 정보를 모아놓은 [객체]
// 객체 안에는 VE / LE / ThisBindings
// LE는 2가지정보를 가지고 있다. record/outer
// record의 수집과정이 hoisting
