// async & await 

// async (asynchronous : 비동기 의 줄임말)  : 함수 안에 비동기로 실행될 부분이 있다라는 것을 의미한다. 
// await : 그 뒤의 code 를 실행하고, 그 code 가 리턴하는 Promise 객체가 fullfilled 상태가 될 때까지 기다려준다. 

// fetch('https://jsonplaceholder.typicode.com/users')
//   .then((response) => response.text())
//   .then((result) => {
//     console.log(result);
//   }) 과 같은 코드를 바꿔 쓸 수 있는데,
  
async function fetchAndPrint() { 
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const result = await response.text();
  console.log(result);
}

fetchAndPrint();
// ------------------------------------------------------------------------------------------------------
// 실행 원리 

// async / await 은 
// Promise obj 을 1. 개발자가 더 편하게 작성할 수 있게 
//               2. 코드의 가독성을 높이기 위해서 도입된 Syntactic sugar (: 기존 문법을 더 편하게 사용할 수 있도록 하는 문법적 장치 )이다.

// await을 만나면, 일단 await 뒤의 코드가 실행되고, 코드의 실행 흐름이 async 함수 바깥으로 나가서 나머지 코드를 다 실행              
// await 뒤에 있던 Promise 객체가 fulfilled 상태가 되기를 기다립니다. 그리고 기다리던 Promise 객체가 fulfilled 상태가 되면 await이 Promise 객체의 작업 성공 결과를 리턴

async function fetchAndPrint() { 
  console.log(2);
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  console.log(7)
  const result = await response.text();
  console.log(result);
}



// await keyword : async 함수 안에서만 사용이 가능하다. 
//                 await keyword 를 만나게 되면, 함수 바깥으로 실행 흐름이 바뀐다. 
// 실행 순서는 숫자 순서대로 실행이 된다. 
console.log(1)
fetchAndPrint();
console.log(3)
console.log(4)
console.log(5)
console.log(6)
// --------------------------------------------------------------------------------------

// async await 문의 catch , finally

async function fetchAndPrint() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const result = await response.text();
  console.log(result);
}

fetchAndPrint();

// await & await 에서 Promise object 가 rejected 상태가 될 때
// try catch 문 사용해야한다.
async function fetchAndPrint() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.log(error);
  } finally {
    console.log('exit')
  }
}
// try 안의 await 이 앞에 붙어있는 Promise object 들 중 rejected 상태가 된 것이 생기면,
// 그 순간 코드의 실행흐름이 catch 문으로 넘어온다. 이렇게 Promise object 가 rejected 상태가 되는 것을 대비할 수 있다. 
fetchAndPrint();






// async 함수는 항상 Promise object 를 리턴한다.

async function fetchAndPrint() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const result = await response.text();
    console.log(result)
  } catch (error) {
    console.log(error);
  } finally {
    console.log('exit')
  }
}

fetchAndPrint();

// 정리
// async 함수는 리던 값에 따라 그에 맞는 Promise obj 을 리턴한다. 

// 이 말은 즉, Promise obj 이어의 값을 return 을 해도 (숫자나 문자열, 일반 객체 등을 포함)
// fullfilled 상태이면서, return값을 작업성공결과로 가진 Promise obj 를 리턴한다는 뜻이다. 

// 또한, 아무 값도 return 하지 않아도 (undefined 를 리턴한 상황이어도,)
// fullfilled 상태이면서 undefined 를 작업 성공 결과로 가진 Promise obj 를 return 한다고 볼 수 있다. 

// 이 말은 async 함수 내부에서 error 가 발생해도 rejected 상태이면서, 해당 에러 갹체를 작업 실패 정보로 가진,
// Promise obj 를 리턴한다는 말이다. 







// async 함수 안의 async 함수 
// 민감한 정보를 제거할때 사용된다. 

// 주소와 전화번호 정보를 제거하는 applyPrivacyRule 함수를 정의 
const applyPrivacyRule = async function (users) {
  const resultWithRuleApplied = users.map((user) => {
    const keys = Object.keys(user);
    const userWithoutPrivateInfo = {};
    keys.forEach((key) => {
      if (key !== 'address' && key !== 'phone') {
        userWithoutPrivateInfo[key] = user[key]
      }
    })
    return userWithoutPrivateInfo;
  })
  
  const p = new Promise((resolve, reject) =>{
    setTimeout(() => { resolve(resultWithRuleApplied) }, 2000 )
  })
  return p;
}

async function getUsers() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const result = await response.text()
    const users = JSON.parse(result);
    const resultWithPrivacyRuleApplied = await applyPrivacyRule(users) // 이렇게 async 함수 인에 또 다른 async 함수를 사용할 때는 그 앞에 await을 붙여서 사용하면 된다. 
    return resultWithPrivacyRuleApplied;
  } catch (error) {
    consolt.log(error)
  } finally {
    console.log('exit')
  }
}

// 사용방법 Promise가 반환되기 때문에 .then() 블럭을 사용해야한다.
getUsers().then((result) => { console.log(result); });







// // async 를 붙이는 위치 

// 1) Function Declaration
async function example1(a, b) {
  return a + b;
}

// 2-1) Function Expression(Named)
const example2_1= async function add(a, b) {
  return a + b;
};

// 2-2) Function Expression(Anonymous)
const example2_2 = async function(a, b) {
  return a + b;
};

// 3-1) Arrow Function
const example3_1 = async (a, b) => {
  return a + b;
};

// 3-2) Arrow Function(shortened)
const example3_2 = async (a, b) => a + b;


// 즉시실행함수(IIFE) 인 경우 
(function print(sentence) {
  console.log(sentence);
  return sentence;
}('I love JavaScript!'));

(function (a, b) {
  return a + b;
}(1, 2));

((a, b) => {
  return a + b; 
})(1, 2);

((a, b) => a + b)(1, 2);



// IIFE 에 async 를 붙일 때
(async function print(sentence) {
  console.log(sentence);
  return sentence;
}('I love JavaScript!'));

(async function (a, b) {
  return a + b;
}(1, 2));

(async (a, b) => {
  return a + b; 
})(1, 2);

(async (a, b) => a + b)(1, 2);






// async 을 활용한 효율적인 반복문 : 순차적인 처리 필요하지 않으면 각 작업을 다시 async 함수로 묶어주면 된다. 

async function getResponses(urls) {
  for(const url of urls){
    const response = await fetch(url);
    console.log(await response.text());
  }
}

// 위 함수는 순차적인 작업 처리를 한다. 
// 이 함수가 만약 순서가 상관 있다면 좋은 코드지만, 순서가 상관없는 경우라면 효율성이 떨어지는 코드이다.

async function fetchUrls(urls){
  for(const url of urls){
    (async () => { // 추가된 부분!
      const response = await fetch(url);
      console.log(await response.text());
    })(); // 추가된 부분!
  }
}

// 일단 각 URL에 대해서 fetch 함수를 실행해서 리퀘스트를 보내는 것을 순서대로 바로 실행
// 코드를 쓰면 일단 모든 URL에 대한 리퀘스트를 쭉 보내버리고, 먼저 리스폰스가 오는 순서대로 그 내용이 출력






// callback (콜벡) :  나중에 실행될 작업을 처리하는 함수 
//                    어떤 함수의 파라미터로 전달되는 모든 함수 


// 종류 
// 1. 동기 실행되는 callback 
// 2. 비동기 실행되는 callback

// 1. 동기 실행되는 callback
// filter method : 배열의 여러 요소들 중에서 특정 조건을 만족하는 요소들만을 추려서 그 요소들로만 이루어진 새로운 배열을 리턴하는 메소드
// 라미터로 받은 콜백을, 매 요소를 순회하면서, 매 요소를 대상으로 실행
const arr = [1, 2, 3, 4, 5, 6];

const newArr = arr.filter(function isOdd(num) {
  return (num % 2 === 1); 
});

console.log(newArr); // [1, 3, 5]
