const obj1 = {
  value1: 10,
};

const obj2 = obj1; // 1번째 방법 : 얕은 복사
const obj3 = JSON.parse(JSON.stringify(obj1));
obj1.value1 += 1;

console.log("obj1", obj1);
console.log("obj2", obj2);
console.log("obj3", obj3);
