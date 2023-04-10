function solution(a, b) {
  let days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  let date = new Date(`2016-${a}-${b}`);
  let answer = date.getDay();
  return days[answer];
}

console.log(solution(1, 2));

// //다른 풀이
// function getDayName(a, b) {
//   var tempDate = new Date(2016, a - 1, b); //a-1..?

//   return tempDate.toString().slice(0, 3).toUpperCase();
// }

//내적
// function solution(a, b) {
//   return a.reduce((acc, cur, i) => (acc += a[i] + b[i]), 0);
// }

function solution(a, b) {
  let result = 0;
  for (let i = 0; i < a.length; i++) {
    result += a[i] * b[i];
  }
  return result;
}

//문자열 다루기 기본

function solution(s) {
  let result = parseInt(s);

  if ((s.length === 4 || s.length === 6) && result == s) {
    return true;
  } else {
    return false;
  }
}

//부족한 금액 계산하기

function solution(price, money, count) {
  let result = 0;
  for (i = 1; i <= count; i++) {
    result += price * i;
  }
  return money > result ? 0 : result - money;
}
