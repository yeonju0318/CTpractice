// user 객체를 생성

var user = {
  name: "yeonju",
  gender: "female",
};

// var changeName = function (user, newName) {
//   var newUser = user;
//   newUser.name = newName;
//   return newUser;
// }; // 객체의 속성에 접근해서 이름을 변경함 -> 가변

// var user2 = changeName(user, "hani");
// //가변이기 때문에 user1도 영향을 받음!!!

// console.log(user === user2); //>>>>true 값이 나오게됨

var changeName = function (user, newName) {
  return {
    name: newName,
    gender: user.gender,
  };
};

var user2 = changeName(user, "hani");

if (user !== user2) {
  console.log("유저 정보가 변경되었습니다.");
}

console.log(user.name, user2.name);
console.log(user === user2);
