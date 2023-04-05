let randomNumbers = [];

while (randomNumbers.length < 3) {
  let randomNumber = Math.floor(Math.random() * 9) + 1;

  if (!randomNumbers.includes(randomNumber)) {
    randomNumbers.push(randomNumber);
  }
}
console.log(randomNumbers);

let count = 1
console.log("컴퓨터가 숫자를 생성하였습니다. 답을 맞춰보세요!");

while (true) {

  let user = prompt();
  let userarray = user.split("");
  let array = userarray.map(Number);

  console.log(array);

  
  let strike = 0
  let ball = 0

  for (i = 0; i < randomNumbers.length; i++) {
    if (array[i] === randomNumbers[i]) {
      strike = strike + 1
    } else if (randomNumbers.includes(array[i])) {
      ball = ball + 1

    }

  }

  console.log(`${count}번째 시도 : ${user}`)
  console.log(`${ball}B${strike}S`);

  if (strike === 3) {
    console.log(`${count}번만에 맞히셨습니다. 게임을 종료합니다.`);
    break;
  }

  
  count++
}








// let randomNumber = Math.floor(Math.random() * 9) + 1; //9미만
// // 0~8 > +1 >1~9

//깃 클론..