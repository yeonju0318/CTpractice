//변수 사용법

//변수(Variable)는 (문자나 숫자 같은) 값을 담는 컨테이너로 값을 유지할 필요가 있을 때 사용한다. 여기에 담겨진 값은 다른 값으로 바꿀 수 있다.



a = 1;
b = 2;

console.log(a+b);

var a ='coding', b = 'everyday';
console.log(a+b);

//변수는 코드의 재활용성을 높여준다. 

console.log(100+10);
console.log((100+10)/10);
console.log(((100+10)/10)-10);
console.log((((100+10)/10)-10)*10);

// ->변수를 적용해보자

a = 100;

a = a + 10;
console.log(a);
a = a / 10;
console.log(a);
a = a - 10;
console.log(a);
a = a * 10;      
console.log(a);