function Person(name, gender) {
  this.name = name;
  this.gender = gender;
}

function Student(name, gender, school) {
  Person.call(this, name, gender); // 여기서 this는 student 인스턴스!
  this.school = school;
}
function Employee(name, gender, company) {
  Person.apply(this, [name, gender]); // 여기서 this는 employee 인스턴스!
  this.company = company;
}

var kd = new Student("길동", "male", "서울대");
var ks = new Employee("길순", "female", "삼성");

//call 함수를 이용해서 생성자 내부에서 다른 생성자를 호출(공통된 내용의 반복 제거)
