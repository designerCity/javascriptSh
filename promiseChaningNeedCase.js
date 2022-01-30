// Promise Chaining 에 필요한 경우 
// 비동기 작업을 순차적으로 수행해야 할 때 사용한다.(이로써 깔끔한 code 작성 가능하다 .)

console.log('Start!')

fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.text())
  .then((result) => {
    const users = JSON.parse(result);
    const user = users[0];
    console.log(user);
    const { address } = user;
    console.log(address); 
    const { geo } = address;
    console.log(geo);
    const { lat } = geo;
    console.log(lat);
  });
  
console.log('End!');



console.log('Start!')

fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.text())
  .then((result) => {
    const users = JSON.parse(result);
    const { id } = users[0]; // 가장 첫번째 사용자의 id 
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`) 
      .then((response) => response.text())
      .then((posts) => {
        console.log(posts); // 해당 id 를 가진 사용자가 작성한 여러 글들을 볼 수 있음
      })
  })
  // 동일한 결과 
    // return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
  // })
//   .then((response) => response.text())
//   .then((posts) => {
//     console.log(posts); // 해당 id 를 가진 사용자가 작성한 여러 글들을 볼 수 있음
//   })
// // // (실행되는 이유 : then 메소트가  return 했던 promise 객체도 callback 에서 리턴한 promise 객체와 똑같은 상태와 결과를 가지게 되기 때문이다. )



console.log('End!');
