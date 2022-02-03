// Promise Object 만들기 
// const p = new Promise((resolve, reject) => {
// });

// executor 함수 :
// 위 Promise 객체 안의 파라미터 함수인 (resolve, reject) => {
// }  이 부분

// executor 함수의 resolve 파라미터 : 생성될 Promise 객체를 fullfilled 상태로 만들 수 있는 함수가 연결된다. 
// executor 함수의 reject 파라미터 : 생성될 Promise 객체를 rejected 상태로 만들 수 있는 함수가 연결된다. 

const p = new Promise((resolve, reject) => {
  // Promise 객체를 fullfilled 상태로 만들기
  // setTimeout(() => { resolve('success'); }, 2000); // p 라는 Promise 객체가 2 초 후에 fullfilled 상태가 된다는 말. // 이떄 success 가 작업성공 결과가 되는 것이다.
  // Promise 객체를 rejected 상태로 만들기
  setTimeout(() => { reject(new Error('fail')) }, 2000); // Error 객체가 작업 실패 정보가 된다. 
});

// 작업 성공 결과 확인 
// p.then((result) => { console.log(result); });

// 작업 실패 정보 확인 
p.catch((error) => { console.log(error); });

// -------------------------------------------------------------------------------------------------------------------------------------

// Promise 객체를 직접 만드는 경우
// 보통 전통적인 형식의 비동기 실행 함수를 사용하는 코드를, Promise 기반의 코드로 변환하기 위해서 만든다.

// setTimeout 함수 예시 
function wait(text, millseconds) {
  setTimeout(() => text, millseconds);
}

fetch('https://jsonplaceholder.typicode.com/users')
// -------------------------------------------------------------------------------------------------------------------

// 이미 상태가 결정된 promise object 만들기 

// // 1. fullfilled 상태의 promise object 만들기 
const p = promise.resolve('success');

// fullfilled 상태이면서
// 작업 성공 결과 : 'success' 인 Promise obejct 

// // 2. rejected 상태의 Promise object 만들기
const p = Promise.reject(new Error('fail'));

// rejected 상태이면서
// 작업 실패 정보로 fail 이라는 메시지를 가진 Error object 를 가진 Promise object 를 만들 수 있다. 


// 어떤 비동기 작업을 처리할 필요가 있다면, new 생성자와 executor 함수를 사용해 Promise object 를 만들어야함.
// 바로 상태가 이미 결정된 Promise object 를 만들고 싶을 땐 resolve 또는 reject method 를 사용한다. 

// Promise object 의 작업 성공 결과 또는 작업 실패 정보는 시점과는 전혀 상관이 없는 개념이다. 
// Promise 객체는 항상 결과를 줄 수 있는 공급자(Provider)이고 그것의 then 메소드는 그 결과를 소비하는 콜백인 소비자(Consumer)를 설정하는 메소드라는 사실
  .then((response) => response.text())
  .then((result) => wait(`${result} by Codeit`, 2000)) // 2초 후에 리스폰스의 내용 뒤에 'by Codeit' 추가하고 리턴
  .then((result) => { console.log(result); });
  
// 위 코드는 undefined 를 받는다.

function wait(text, milliseconds) {
  const p = new Promise((resolve, reject) => {
    setTimeout(() => { resolve(text); }, 2000);
  });
  return p;
}


fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.text())
  .then((result) => wait(`${result} by Codeit`, 2000)) // 2초 후에 리스폰스의 내용 뒤에 'by Codeit' 추가하고 리턴
  .then((result) => { console.log(result); });
