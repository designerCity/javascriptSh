console.log('Start!')

fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.text()) // 작업 성공 결과는 response 에 넘어오게 된다. 이때 실행할 callback 이 response.text() 이다. 
  .then((result) => { console.log(result); }); // 윗 줄의 작업 성공 결과가 첫 번째 파라미터인 result 에 담기는 것이다. 
  // then method 는 promise 객체의 method 이다.
  // promise 객체가 pending 상태에서 fullfiled 상태(request 에 대한 response 를 받았을 때)가 될 때 실행할 콜백을 등록하는 method 이다. 
console.log('End!')

// then method 를 이용한 promise chaining(연결하기)
// then method 는 새로운(별개의) promise object 를 return 한다. 
// promise chaining : promise 객체에 then method 를 연속적으로 붙이는 것 

console.log('Start!')

fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.text())// response.text() 는 promise 객체를 리턴한다. 
  .then((result) => { 
    const users = JSON.parse(result);
    return users[0];
  })
  .then((user) => {
    console.log(user);
    const { address } = user; // user 객체에서 address property 를 추출하는 법 
    return address;
  })
  .then((geo) => {
    console.log(geo);
    const { lat } = geo; // address 객체에서 geo라는 property 추출하는 법 
    return lat;
  })
  .then((lat) => {
    console.log(lat);
  })
  
console.log('End!')

// 정리 
// 1. tehn method 가 promise 객체를 리턴하는 경우 callback 이 어떤 값을 리턴하는 지에 따라서 promise 객체가 가지게 될 상태와 결과를 그대로 가지게 된다. 
// 2. promise 객체가 아닌 값을 리턴하는 경우 작업 성공 결과가 fullfilled 상태가 되고 해당 리턴 값을 작업 성공 결과로 가지고 된다. 
