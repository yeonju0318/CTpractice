//조건문 - if, else it, switch

// let x = 10;

// if (x > 0) {
//     console.log('x는 양수입니다.')
// }

// let y = "hello world";

// if (y.length >= 5) {
//     console.log(y.length);
// }


//if - else문
// let x = -3;

// if(x > 0) {
//     //main logic #1
//     console.log("x는 양수입니다.");
// } else {
//     //main logic #2
//     console.log("x는 음수입니다.");
// }


//switch
//변수의 값에 따라, 여러개의 경우(case)중 하나를 선택

let fruit = "키위";

switch (fruit) {
    case "사과":
        console.log('사과입니다.');
        break;
        
    case "바나나":
        console.log('바나나입니다');
        break;

    default:
        console.log('아무것도 아닙니다');
        break;


    
}