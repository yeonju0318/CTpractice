function solution(s) {
  let answer = [];
  let arry = s.split(" ");
  for (i of arry) {
    let a = "";
    for (j = 0; j < i.length; j++) {
      a += j % 2 === 0 ? i[j].toUpperCase() : i[j].toLowerCase();
    }
    answer.push(a);
  }
  return answer.join(" ");
}

// split으로 띄어쓰기 기준으로 배열만들기
// 그 배열 안에서 반복문 실행
// i의 텍스트 길이를 찾아서 이중for문 실행 =>j가 짝수이면 대문자 / 홀수이면 소문자로 변경
// 빈배열 answer에 값을 push
// join 으로 띄어쓰기 넣고 반환
