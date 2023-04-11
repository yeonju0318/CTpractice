// 함수 solution은 정수 n을 매개변수로 입력받습니다.
// n의 각 자릿수를 큰것부터 작은 순으로 정렬한 새로운 정수를 리턴해주세요.
// 예를들어 n이 118372면 873211을 리턴하면 됩니다.

//숫자는 split 써도 배열이 안됩니다 => 이유 : 숫자라서 ,,
// 1. 문자로 바꿔준다
// 2. split을 사용해서 배열로 바꿔준다.
// 3. sort 를 사용해서 내림차순 해준다.
// 4. 873211< 정수로 변환해준다. [ 8,7,3,2,1,1 ] arr.map((v)=> parseInt(v))
// 5. 배열을 문자로 변환하는 메서드,, join()
function solution(n) {
  let answer = parseInt(n.toString().split('').sort().reverse().join(''));
  return answer;
}
console.log(solution(118372)); // 873211
실행한 결괏값 "873211"이 기댓값 873211과 다릅니다.

sort((a,b)=>a -b) >> 121 23 3 4
"121 23 3 4"

8 7 3 2 1 1