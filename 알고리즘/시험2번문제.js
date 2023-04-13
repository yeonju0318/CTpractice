//2번 문제) O/X 덧셈
// "OOXXOXXOOO"와 같은 OX문의 결과가 있다. O는 문제를 맞은 것이고, X는 문제를 틀린 것이다. 문제를 맞은 경우 그 문제의 점수는 그 문제까지 연속된 O의 개수가 된다.
//예를 들어, 10번 문제의 점수는 3이 된다.
//"OOXXOXXOOO"의 점수는 1+2+0+0+1+0+0+1+2+3 = 10점이다.

//연속된 O의갯수를 계산해서 점수를 구해야함..
//X를 만나면 다시 초기화된다

function solution(str) {
  let answer = 0;
  let count = 0; //연속된 0의 갯수
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "O") {
      count++;
      answer += count;
    } else {
      count = 0;
    }
  }
  return answer;
}
let str = "OXOOOXXXOXOOXOOOOOXO";
console.log(solution(str));
