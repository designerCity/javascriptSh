// 실제 실행 순서 
console.log('Start!') // 1 

fetch('https://jsonplaceholder.typicode.com/users') // 2
  .then((response) => response.text()) // 서버의 response 가 도착하면 then method 로 등록해두었던 callback 들이 순서대로 실행이 되면서 4
  .then((result) => {console.log(result); }); // 5
  // then method 는 callback 을 등록만 한다.
console.log('End!') // 3

// 위에서 아래로 출력이 되지 않고 
// Start!
// End!
// 서버가 보내준 response 의 내용이 출력된다. 

// // 이유 
// console.log('Start');
// fetch 함수(리퀘스트 보내기 및 콜백 등록)
// console.log('End');
// 리스폰스가 오면 2. 에서 then 메소드로 등록해뒀던 콜백 실행

// 이유 : fetch 함수에 비동기 실행이 되는 부분이 있기 때문이다.
//                     '비동기 실행' : 특정 작업을 시작(리퀘스트 보내기)하고 완벽하게 다 처리(리스폰스를 받아서 처리)하기 전에, 실행 흐름이 바로 다음 코드로 넘어가고, 나중에 콜백이 실행되는 것
//                     비동기 실행을 사용하는 이유 :  동일한 작업을 더 빠른 시간 내에 처리할 수 있어서 사용한다. 



// // 비동기 실행이 되는 함수들
// 1. setTimeout 함수 : 특정 함수의 실행을 원하는 시간만큼 뒤로 미루기 위해 사용하는 함수
//     setTimeout(콜백, 시간) 
console.log('a');
setTimeout(() => { console.log('b'); }, 2000);
console.log('c');

// 첫 번째 파라미터에 있는
// () ⇒ { console.log('b'); },

// 이 콜백의 실행을, 두 번째 파라미터에 적힌 2000 밀리세컨즈(=2초) 뒤로 미룹니다.
//  결과 : a와 c가 먼저 출력되고, 약 2초가 지난 후에 b가 출력
 
//  2. setInterval 함수 : 특정 콜백을 일정한 시간 간격으로 실행하도록 등록하는 함수
//     setInterval(콜백, 시간)
console.log('a');
setInterval(() => { console.log('b'); }, 2000);
console.log('c');
// 첫 번째 파라미터에 있는

// () => { console.log('b'); }
// 이 콜백의 실행을, 두 번째 파라미터에 적힌 2000 밀리세컨즈(=2초) 뒤로 미룹니다.
//  결과 : a와 c가 먼저 출력되고, 약 2초마다 b 가 출력된다.
 
 
// 3. addEventListener 메소드 :
//    이유 :파라미터로 전달된 콜백이 당장 실행되는 것이 아니라, 나중에 특정 조건(클릭 이벤트 발생)이 만족될 때(마다) 실행되기 때문

//    addEventListener(이벤트 이름, 콜백)
btn.addEventListener('click', function (e) { // 해당 이벤트 객체가 파라미터 e로 넘어옵니다.
  console.log('Hello Codeit!');
});

// 또는 arrow function 형식으로 이렇게 나타낼 수도 있습니다.
btn.addEventListener('click', (e) => {
  console.log('Hello Codeit!');
});



// fetch 함수는 Promise 객체라는 것을 리턴한다. 
// (서버에 request 를 보내고 response 를 받는 작업을 수행한다. 이런 작업의 결과가 promise 객체에 저장된다.)
// (따라서, promise 객체를 보게 되면 그 작업이 성공했는지 실패했는지 확인이 가능하다.)

// .then 은 해당  Promise 객체의 메소드이다.'비동기 실행을 지원하는 또 다른 종류의 문법에 해당'

 
// Promise 객체? : 어떤 작업에 관한 '상태 정보를 가지고 있는 객체'
//     상태 3가지 
//         1. pending  진행중 
//         2. fulfilled 성공 (성공 시 promise 객체는 작업성공 결과를 함께 가진다. 예로 response 가 해당됨.)
//         3. rejected  실패 (실패 시 작업의 실패 이유를 가지게 된다. (작업 실패 정보)
        


