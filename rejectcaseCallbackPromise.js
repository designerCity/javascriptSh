// // rejected 상태가 되면 실행할 callback

// console.log('Start!')

// fetch('https://jsonplaceholder.typicode.com/users')
//   .then((response) => response.text())
//   .then((result) => {
//     const users = JSON.parse(result);
//     return users[0];
//   })
//   .then((user) => {
//     console.log(user);
//     const { address } = user ;
//     return address;
//   })


fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.text(), (error) => { console.log(error); })
  // 첫 번째 callback 은 promise 객체가 fullfilled 상태가 될 때 실행되기에 파라미터로 promise 객체의 작업 성공 결과가 넘어옴 .
  // 두 번째 callback 은 promise 객체가 rejected 상태가 되면 실행할 callback 이다. 파라미터로 작업 실패 정보가 넘어온다.
  .then((result) => { console.log(result); })
