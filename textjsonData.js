console.log('Start!');

fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.text())
  .then((result) => {
    const users = JSON.parse(result);
    // ...
  });

console.log('End'); 

// 위 코드에서 보이는 것처럼 response 객체의 text 메소드로 리스폰스의 내용을 추출(response.text();)하고 
// 이것을 Deserialize하거나(JSON.parse(result);)

// text method 
// fetch 함수로 리스폰스를 잘 받으면, response 객체의 text 메소드는, fulfilled 상태이면서 리스폰스의 바디에 있는 내용을 
// string 타입으로 변환한 값을 '작업 성공 결과'로 가진 Promise 객체를 리턴 (작업 성공 결과는 string )

// -----------------------------------------------

console.log('Start!');

fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json())
  .then((users) => {
    // ...
  });

console.log('End');

// response 객체의 json 메소드로 리스폰스의 내용 추출과 Deserialize를 한 번에 수행(response.json())할 수 있다

// json method 
// response 객체의 json 메소드는, fulfilled 상태이면서, 리스폰스의 바디에 있는 JSON 데이터를 
// 자바스크립트 객체로 Deserialize해서 생겨난 객체를 '작업 성공 결과'로 가진 Promise 객체를 리턴

// 리스폰스의 바디에 있는 내용이 JSON 타입이 아니라면 에러가 발생하고 Promise 객체는 rejected 상태가 되면서 그 '작업 실패 정보'를 갖게 됨.
