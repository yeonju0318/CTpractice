//마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때,
//완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.

// function solution(participant, completion) {
//   participant.sort(); //["ana""mislav""mislav""stanko"]
//   completion.sort(); //["ana""mislav""stanko"]
//   for (let i = 0; i < participant.length; i++) {
//     if (participant[i] !== completion[i]) {
//       return participant[i];
//     }
//   }
// }

//-----------------
// ["leo", "kiki", "eden"] >> 참가자
// ["eden", "kiki"] >>완주자

function solution(participant, completion) {
  var answer = [];
  let arr = new Map();
  for (let i = 0; i < participant.length; i++) {
    arr.set(participant[i], 0);
    //Map(1) { 'leo' => 0 }
    //Map(2) { 'leo' => 0, 'kiki' => 0 }
    //Map(3) { 'leo' => 0, 'kiki' => 0, 'eden' => 0 }
  }
  for (j = 0; j < participant.length; j++) {
    arr.set(participant[j], arr.get(participant[j]) + 1);
  }
  // Map(3) { 'leo' => 1, 'kiki' => 1, 'eden' => 1 }

  for (k = 0; k < completion.length; k++) {
    arr.set(completion[k], arr.get(completion[k]) - 1);
  }
  //Map(3) { 'leo' => 1, 'kiki' => 0, 'eden' => 0 }

  [...arr].map((v) => {
    if (v[1] === 1) {
      answer.push(v[0]);
    }
  });
  return answer[0];
}
console.log(solution(["leo", "kiki", "eden"], ["eden", "kiki"]));

// //-------------
// var solution = (_, $) =>
//   _.find(
//     (_) => !$[_]--,
//     $.map((_) => ($[_] = ($[_] | 0) + 1))
//   );

// //------------
