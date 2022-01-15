// 데이터 구조 중 일환
// 1 // Map : 이름이 있는 데이터를 지정 (객체와 비슷)

// map.set(key, value): key를 이용해 value를 추가하는 메소드.
// map.get(key): key에 해당하는 값을 얻는 메소드. key가 존재하지 않으면 undefined를 반환.
// map.has(key): key가 존재하면 true, 존재하지 않으면 false를 반환하는 메소드.
// map.delete(key): key에 해당하는 값을 삭제하는 메소드.
// map.clear(): Map 안의 모든 요소를 제거하는 메소드.
// map.size: 요소의 개수를 반환하는 프로퍼티. (메소드가 아닌 점 주의! 배열의 length 프로퍼티와 같은 역할)

// 2 // Set : 여러 개의 값을 순서대로 저장한다는 점에서 배열과 비슷하다. 
// 아규먼트로 배열 전달 가능

// set.add(value): 값을 추가하는 메소드. (메소드를 호출한 자리에는 추가된 값을 가진 Set 자신을 반환.)
// set.has(value): Set 안에 값이 존재하면 true, 아니면 false를 반환하는 메소드.
// set.delete(value): 값을 제거하는 메소드. (메소드를 호출한 자리에는 셋 내에 값이 있어서 제거에 성공하면 true, 아니면 false를 반환.)
// set.clear(): Set 안의 모든 요소를 제거하는 메소드.
// set.size: 요소의 개수를 반환하는 프로퍼티. (메소드가 아닌 점 주의! 배열의 length 프로퍼티와 같은 역할)
// 개발 값에 접근하는 방법이 없다. 반복문을 통해서 접근해야함.


// 중복 값을 허용하지 않는다. 중복되는 값을 추가하려고 하면 무시한다. 
