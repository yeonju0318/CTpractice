// Set
// -고유한 값을 저장하는 자료구조다.
// -값만 저장한다
// -키를 저장하지는 않는다.
// - 값이 중복되지 않는 유일한 요소로만 구성된다.

//값 추가, 검색, 값 삭제, 모든 값 제거, 존재 여부 확인

// 집합 개념을 생각하자!

const mySet = new Set();
mySet.add("value1");
mySet.add("value2");
mySet.add("value3");
mySet.add("value5");
mySet.add("value8");


// console.log(mySet.size);
// console.log(mySet.has("value1"));
// console.log(mySet.has("value3"));

// Iterator, 반복했던 그 친구.

for (const value of mySet.values()){
    console.log(value);
}