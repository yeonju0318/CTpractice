//얕은 복사, 이런식으로 작성하면 어떨까?
// for~in문을 사용해서 객체의 key값을 돌면서 계속 뒤져보며 별도 객체를 생성하게된다.

// var copyObject = function (target) {
//   var result = {};

//   for (var prop in target) {
//     result[prop] = target[prop];
//   }
//   return result;
// };

var copyObjectDeep = function (target) {
  var result = {};
  if (typeof target === "object" && target !== null) {
    for (var prop in target) {
      result[prop] = copyObjectDeep(target[prop]);
    }
  } else {
    result = target;
  }
  return result;
};

//01번 예제에 적용시켜본것

var user = {
  name: "yeonju",
  gender: "female",
  mood: {
    happy: null,
    sad: [1, 2],
  },
};

var user2 = copyObjectDeep(user);

user2.name = "hani";
user2.mood.sad[0] = 7;

console.log(user);
console.log(user2);

// var user2 = copyObject(user);
// user2.name = "hani";

// if (user !== user2) {
//   console.log("유저 정보가 변경되었습니다.");
// }

// console.log(user.name, user2.name);
// console.log(user === user2);

// 얕은 복사: 바로 아래 단계의 값만 복사(위예제)
// ㄴ문제점: 중첩된 객체의 경우 주소값만 복사함
// ★★깊은 복사: 내부의 모든 값들을 하나하나 다 찾아서 모두 복사하는 방법
//재귀적 수행
