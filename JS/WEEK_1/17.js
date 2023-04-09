// while

// let i = 0;

// while(i < 10) {
//     console.log(i);
//     i++;

// }

//while 문을 활용해서, 3초과 100 미만의 숫자 중 5의 배수인 것만 출력하는 예
// let i = 3;
// while(i<100){
//     if (i % 5 === 0 && i>= 5){
//         console.log(i + "는 5의 배수입니다.");
        
//     }
//     i++;
// }

// do ~ while

// let i = 0;

// do{
//     console.log(i);
//     i++;
// } while(i < 10);

for (i = 0; i <= 10; i++ ){
    if (i === 5){
        break; // for 문을 스탑한다는 의미.
    }
    console.log(i);

}

for (i = 0; i <= 10; i++ ){
    if (i === 5){
        continue; // 그 다음 순서로 넘어간다.
    }
    console.log(i);

}