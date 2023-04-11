function solution(n) {
  let answer = String(n)
    .split("")
    .reduce((acc, cur) => acc + cur * 1, 0);

  return answer;
}

// n을 문자열로바꾸기
// split으로 쪼개기
// reduce로 더해주기
// + 숫자처리 해주고 더해줘야함
//  parseInt(cur) Number(cur) cur * 1 과 같은 방법으로 처리해줄 수 있음..
