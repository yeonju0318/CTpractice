function solution(num1, num2) {
    if (num1 === num2) {
        return 1
    } else return -1
}

num1 = 1;
num2 = 1;



function solution(num1, num2) {
    let a = num1 / num2 * 1000
    math.floor(a);
    return a;
}


function solution(angle) {
    if (0 < angle < 90) {
        angle = 1
    } else if (angle === 90) {
        angle = 2
    } else if (90 < angle < 180) {
        angle = 3
    } else {
        angle = 4
    }
    return angle;
}

function solution(arr) {
    let arry = arr.reduce((acc, cur) => acc + cur);
    return arry / arr.length
}


function solution(phone_number) {
    let numbers1 = phone_number.slice(-4);
    let numbers2 = phone_number.length - 4;

    return "*".repeat(numbers2) + numbers1
}
