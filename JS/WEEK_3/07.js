//스코프 체인

// 아래 코드를 여러분이 직접 call stack을 그려가며 scope 관점에서 변수에 접근해보세요!
// 어려우신 분들은 강의를 한번 더 돌려보시기를 권장드려요 :)
var a = 1;
var outer = function () {
  var inner = function () {
    console.log(a); // 이 값은 뭐가 나올지 예상해보세요! 이유는 뭐죠? scope 관점에서!
    var a = 3;
  };
  inner();
  console.log(a); // 이 값은 또 뭐가 나올까요? 이유는요? scope 관점에서!
};
outer();
console.log(a); // 이 값은 뭐가 나올까요? 마찬가지로 이유도!

//각각의 실행 컨텍스트는 LE 안에 record와 outer를 가지고 있고,
// outer 안에는 그 실행 컨텍스트가 선언될 당시의 LE정보가 다 들어있으니
// scope chain에 의해 상위 컨텍스트의 record를 읽어올 수 있다
