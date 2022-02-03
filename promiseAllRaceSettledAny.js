// another Promise method

// all method : then method 처럼 새로운 Promise object 를 return 한다.
//                 배열 안에 있는 모든 Promise object 가 pending 상태에서 fullfilled 상태가 될 때까지 기다린다. 
//                 모든 Promise 객체들이 fulfilled 상태가 되면, all 메소드가 리턴했던 Promise 객체는 fulfilled 상태가 되고, 
//                 각 Promise 객체의 작업 성공 결과들로 이루어진 배열을, 그 작업 성공 결과로 가진다. 

                // 여러 Promise object 의 작업 성공결과를 기다렸다가 모두 한 번에 취합하기 위해 사용함 
                //  all 메소드는 하나의 Promise 객체라도 rejected 상태가 되면, 전체 작업이 실패한 것으로 간주해야 할 때 사용
                
                

// 1번 직원 정보
const p1 = fetch('https://learn.codeit.kr/api/members/1').then((res) => res.json());
// 2번 직원 정보
const p2 = fetch('https://learn.codeit.kr/api/members/2').then((res) => res.json());
// 3번 직원 정보
const p3 = fetch('https://learn.codeit.kr/api/members/3').then((res) => res.json());

Promise
  .all([p1, p2, p3]) // arguments 로 배열 하나가 들어있다. 
  .then((results) => {
    console.log(results); // Array : [1번 직원 정보, 2번 직원 정보, 3번 직원 정보]
  });
  
// -------------------------------------------------------------  
  
// race method 
// 여러 Promise object 들이 있는 배열을 아규먼트로 받는다.
// Promise object 를 리턴한다. 
// 이 리턴한 Promise 객체는 아규먼트로 들어온 배열의 여러 Promise 객체들 중에서 가장 먼저 fullfilled 상태 또는 reject 상태가 된 Promise 객체와 동일한 상태와 결과를 갖게 된다. 
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve('Success'), 1000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error('fail')), 2000);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error('fail2')), 4000);
});

Promise
  .race([p1, p2, p3])
  .then((result) => {
    console.log(result); // hello 출력
  })
  .catch((value) => {
    console.log(value);
  });
  
// race 메소드가 리턴한 Promise 객체는 이 중에서 가장 빨리 상태 정보가 결정된 p1 객체와 동일한 상태와 결과



// allSettled 메소드 : 배열 내의 모든 Promise 객체가 fulfilled 또는 rejected 상태가 되기까지 기다리고, pending 상태의 Promise 객체가 하나도 없게 되면, A의 상태값은 fulfilled 상태가 되고 그 작업 성공 결과로, 하나의 배열을 갖게 됩니다. 
// (settled : fullfilled 상태와 rejected 상태를 합한 것)
// 이 배열에는 아규먼트로 받았던 배열 내의 각 promise 객체의

// (1) 최종 상태를 status 프로퍼티, 
// (2) 그 작업 성공 결과는 value 프로퍼티, 
// (3) 그 작업 실패 정보는 reason 프로퍼티



// -------------------------------------------------------------

// any 메소드 : 여러 Promise 객체들 중에서 가장 먼저 fulfilled 상태가 된 Promise 객체의 상태와 결과가 A에도 똑같이 반영
// any라는 단어의 뜻처럼 배열 속의 Promise 객체 중 단 하나라도 fulfilled 상태가 되면 된다. 
