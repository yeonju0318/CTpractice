// 패션의 선도주자 청길이는 패션의 발전을 위해 패션쇼를 방문해 유니크한 아이템을 조사하기로 하였습니다.
// 청길이는 입장하는 사람들의 패션에서 처음 보는 아이템 만을 기록합니다.
// 이때 청길이의 기록에서 아래 규칙에 맞게 배열로 출력해 주세요.

// 청길이는 각 옷의 종류를 정수로 기록해 놓습니다.
// ex) 입력은 "1번: 3,1 2번: 4 3번: 2,1,3 4번: 2,1,3,4" 형태의 문자열입니다.
// 기록은 청길이가 번호 순서로 유니크한 옷의 번호를 적습니다.
// 유니크한 옷은 기록된 순서로 추출되고 출력됩니다.
// ex) 출력은 [3,1,4,2]입니다.

// **입출력예시**

// **입력**
// "1번: 4,2,3 2번: 3 3번: 2,3,4,1 4번: 2,3"

// **출력**
// [4, 2, 3, 1]

function solution(a) {
  let arr = a.split(",");
  //   console.log(arr);
  let arr2 = arr.filter((b, i) => arr.indexOf(b) === i);

  return [...arr2].map((a) => parseInt(a));
}

console.log(solution("4,2,3,3,2,3,4,1,2,3")); // [4,2,3,1]

function solution(s) {
  let arr = s.split(" ").filter((val, idx) => !!(idx % 2));
  arr = arr.join(",").split(",");
  return [...new Set(arr)];
  Map.set();
}

solution("1번: 3,1 2번: 4 3번: 2,1,3 4번: 2,1,3,4");

// for(let a of arr){
//     if(!arr2.includes(a)){arr2.push(a)}
// }

// function solution(a) {
//   for (i = 0; i < arr.length; i++) {
//     if (!arr2.includes(a)) {
//       arr2.push(arr[i]);
//     }
//   }
// }

// function solution(a) {
//   let arr = a.split(",");
//   // console.log(arr)
//   let arr2 = [];
//   for (let a of arr) {
//     if (!arr2.includes(a)) {
//       arr2.push(a);
//     }
//   }
//   return arr2;
// }
