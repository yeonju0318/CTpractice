//자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요.
//예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.

// function solution(n) {
//   answer = String(n);
//   arry = answer.split("");
//   rearry = arry.reverse();

//   return rearry.map((a) => parseInt(a));
// }

// console.log(solution(1234));

function solution(n) {
  answer = String(n);
  return answer
    .split("")
    .reverse()
    .map((a) => parseInt(a));
}

console.log(solution(12345));
