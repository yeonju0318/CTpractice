// array의 각 element 중 divisor로 나누어 떨어지는 값을 오름차순으로 정렬한 배열을 반환하는 함수, solution을 작성해주세요.
//divisor로 나누어 떨어지는 element가 하나도 없다면 배열에 -1을 담아 반환하세요.

function solution(arr, divisor) {
  let Farray = arr.filter((n) => n % divisor === 0); //arr에서 divisor로 나누어 떨어지는 값을 필터링하여 Farray에 저장

  if (Farray.length === 0) {
    return [-1]; //Farray의 길이가 0이면, -1을 담은 배열을 반환
  }
  Farray.sort((a, b) => a - b);
  return Farray; //그렇지 않으면, Farray 오름차순으로 정렬하여 반환
}

// 📌 return문은 함수의 실행을 *중단*하고 값을 반환하기 때문에.. 잘써줘야한다ㅠㅠ
