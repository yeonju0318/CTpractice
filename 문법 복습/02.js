// 연산자 복습
// 비교 연산자

// 1.동등 연산자 
//좌항과 우항을 비교해서 서로 값이 같다면 true 다르다면 false가 된다.

alert(1==2)             //false
alert(1==1)             //true
alert("one"=="two")     //false 
alert("one"=="one")     //true


// 2.일치 연산자 
//좌항과 우항이 '정확'하게 같을 때 true 다르면 false가 된다.
//'정확'하다 = 데이터 type까지 같다 라는 의미

alert(1=='1');              //true
alert(1==='1');             //false


// 3.비교 연산자 

//'!'는 부정을 의미한다.

alert(1!=2);            //true
alert(1!=1);            //false
alert("one"!="two");    //true
alert("one"!="one");    //false

//좌항이 우항보다 크다면 참, 그렇지 않다면 거짓임을 알려주는 연산자.
alert(10>20);   //false
alert(10>1);    //true
alert(10>10);   //false


//좌항이 우항보다 크거나 같다.
alert(10>=20);      //false
alert(10>=1);       //true
alert(10>=10);      //true