//1번 문제) 잔돈을 구해보자!
//편의점에는 500원, 100원, 50원, 10원이 충분히 있고, 편의점 직원은 언제나 거스름돈 개수가 가장 적게 잔돈을 준다.
//편의점에서 물건을 사고 1000원 지폐 한 장을 냈을 때, 받을 잔돈의 개수를 구하는 프로그램을 작성

// 잔돈 = 1000 - 물건값
// 동전 갯수 : 잔돈 / 동전 > 몫

function solution(num) {
  let answer = 0;
  let change = 1000 - num;
  let coins = [500, 100, 50, 10];

  for (let coin of coins) {
    answer += Math.floor(change / coin); //동전 갯수
    change %= coin; //사용한 동전으로 계산한 잔돈을 빼고 남은 나머지
  }
  return answer;
}
let num1 = 160;
console.log(solution(num1));
