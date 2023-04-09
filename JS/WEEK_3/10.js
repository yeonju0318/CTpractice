var obj = {
  a: 1,
  method: function (x, y) {
    console.log(this.a, x, y);
  },
};

// method 함수 안의 this는 항상 obj!!!
// obj.method(2, 3); // 1 2 3
obj.method.apply({ a: 4 }, [5, 6]); // 4 5 6

// 기존에 있었던 메서드 뒤에 붙어서 즉시 실행을 해주되,
// 앞에 this로 묶어줄 객체를 붙여주고나서 나머지 매개변수를 넣으면된다.
