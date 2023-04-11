// function solution(num1, num2) {
//     if (num1 === num2) {
//         return 1
//     } else return -1
// }

// num1 = 1;
// num2 = 1;

// function solution(num1, num2) {
//     let a = num1 / num2 * 1000
//     math.floor(a); //나머지 버리는 함수
//     return a;
// }

// function solution(angle) {
//     if (0 < angle && angle < 90) {
//         angle = 1
//     } else if (angle === 90) {
//         angle = 2
//     } else if (90 < angle && angle < 180) {
//         angle = 3
//     } else {
//         angle = 4
//     }
//     return angle;
// }

//------------------------------------------------------------------

//평균 구하기

function solution(arr) {
  let arry = arr.reduce((acc, cur) => acc + cur);
  return arry / arr.length;
}

// function solution(arr) {
//   var answer = 0;
//   arr.forEach((i) => {
//     answer += i;
//   });
//   return answer / arr.length;
// }

//핸드폰 번호 가리기

function solution(phone_number) {
  let numbers1 = phone_number.slice(-4);
  let numbers2 = phone_number.length - 4;

  return "*".repeat(numbers2) + numbers1;
}

// function solution(phone_number) {
//     var answer = "";
//     let len = phone_number.length;
//     answer = "*".repeat(len - 4) + phone_number.slice(len - 4, len);
//     return answer;
//   } *박지수 코드

// 행렬의 덧셈
// arr1 [[1,2],[3,4]]
// arr2 [[3,4],[5,6]]
// => return [[4,6],[7,9]]

function solution(arr1, arr2) {
  let answer = [];
  for (let i = 0; i < arr1.length; i++) {
    let row = [];
    for (let j = 0; j < arr1[i].length; j++) {
      row.push(arr1[i][j] + arr2[i][j]);
    }
    answer.push(row);
    // prettier
  }
  return answer;
}
console.log(
  solution(
    [
      [1, 2],
      [2, 3],
    ],
    [
      [3, 4],
      [5, 6],
    ]
  )
);

//*map함수사용 *박지수코드

// function solution(arr1, arr2) { arr1 =
//     let answer = arr1.map((arr, idx) => {
//         return arr.map((val, idx2) => val + arr2[idx][idx2]);
//     });
//     return answer;
// }

//x만큼 간격이 있는 n개의 숫자

function solution(x, n) {
  //x부터 시작해서 x의 배수만큼
  let row = [];
  for (let i = 1; i <= n; i++) {
    row.push(x * i);
  }
  return row;
}

// function solution(absolutes, signs) {
//   let answer = 0;
//   for (let i = 0; i < absolutes.length; i++) {
//     answer += signs[i] ? absolutes[i] : -1 * absolutes[i];
//   }
//   return answer;
// }
