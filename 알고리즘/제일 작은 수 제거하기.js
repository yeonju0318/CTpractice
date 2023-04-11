// 정수를 저장한 배열, arr 에서 가장 작은 수를 제거한 배열을 리턴하는 함수, solution을 완성해주세요.
// 단, 리턴하려는 배열이 빈 배열인 경우엔 배열에 -1을 채워 리턴하세요.
// 예를들어 arr이 [4,3,2,1]인 경우는 [4,3,2]를 리턴 하고, [10]면 [-1]을 리턴 합니다.

// Math.min(arr) < Number타입으로 넣어야함
// 1. arr 을 Number타입으로 변경
// 2. Math.min을 사용해서 최솟값 구하기
// 3. filter() 메서드 사용해서 최솟값을 포함하지 않는 배열로 출력

function solution(arr) {
  let min = Math.min(...arr);
  let answer = arr.filter((a) => a !== min);
  if (answer.length === 0) {
    return [-1];
  }
  return answer;
}

console.log(solution([4, 3, 2, 1]));
