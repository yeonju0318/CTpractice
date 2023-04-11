// 임의의 양의 정수 n에 대해, n이 어떤 양의 정수 x의 제곱인지 아닌지 판단하려 합니다.
// n이 양의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고, n이 양의 정수 x의 제곱이 아니라면 -1을 리턴하는 함수를 완성하세요.

// Math.sqrt(16) 제곱근을 구하는 메서드 , 16의 제곱근은 ? 4 9의 제곱근은? 3

function solution(n) {
  var answer = 0;
  let x = Math.sqrt();
  if (x % 1 !== 0) {
    parseInt(x) === x;
    answer = -1;
  } else {
    answer = Math.pow(x + 1, 2);
  }
  return answer;
}

console.log(solution(121));
