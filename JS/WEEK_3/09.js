//명시적 this 바인딩
//call, apply, bind
//call

var func = function (a, b, c) {
  console.log(this, a, b, c);
};

// no binding
// func(1, 2, 3); // Window{ ... } 1 2 3

// 명시적 binding
// func 안에 this에는 {x: 1}이 binding돼요
func.apply({ x: 1 }, [4, 5, 6]); // { x: 1 } 4 5 6
