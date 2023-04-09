function multiplyBy(num){
    return function(x){
        return x * num;
    };
}

function add(x,y){
    return x + y;
}

const multiplyByTwo = multiplyBy(2);

// const multiplyByTwo = function(x){
//     return x * 2;
// };
//이거랑 같은것


const multiplyByThree = multiplyBy(3);

// console.log(multiplyByTwo(10));
// console.log(multiplyByThree(10));

const result = add(multiplyByTwo(5),multiplyByThree(10))
console.log(`Final => ${result}`)

