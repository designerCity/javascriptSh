 // catch method : promise 객체가 rejected 상태가 되면 실행할 콜벡을 등록하는 method 이다.. 

fetch('https://jsonplaceholder.typicode.commmmmmmmmmm/users')
  .then((response) => response.text())
  .catch((error) => { console.log(error); })  // catch method
//.then(undefined, (error) => { console.log(error); }) 이것과 같다. 
  .then((result) => { console.log(result); });



fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.text())  // error 가 발생하더라도 catch method 가 대비하고 있다
  .catch((error) => { console.log(error); })
  .then((result) => { 
    console.log(result); 
    throw new Error('test')
  }); // 여기서 error 가 발생한다면 잡지 못한다. 

//  -----------------------------------------------------------------------------------------
  
// 따라서 
fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.text())  // error 가 발생하더라도 catch method 가 대비하고 있다
  .then((result) => { 
    console.log(result); 
    throw new Error('test')
  });  
  .catch((error) => { console.log(error); }) // 이렇게 catch method 를 가장 마지막에 써야 모두 대응할 수 있다.  


// catch 메소드를 Promise Chain의 마지막에 늘 써줘야 하는 것은 맞지만, 작업을 살릴 방법이 있다면 Promise Chain 중간에 catch 메소드를 써도 된다.



// promise 객체에는 then mehtod, catch method, finally method 가 있다. 

// finally method : 어떤 작업이 성공(fullfilled)하던 실패(rejected)하던 간에 상관없이 항상 실행하고 싶은 callback 
// finally method 의 파라미터로 작업 성공 결과를 받을 때
fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.text()) 
  .then((result) => { console.log(result) })
  .catch((error) => { console.log(error) })
  .finally(() => { console.log('exit') }) // 안의 callback 은 작업성공 결과나 작업 실패 정보가 필요하지 않기에 파라미터가 필요 없다.
 

// finally method 의 파라미터로 작업 실패 정보를 받을 때
fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.text()) 
  .then((result) => { console.log(result) })
  .catch((error) => { 
    console.log(error) 
    throw new Error('from catch method')
  })
  .finally(() => { console.log('exit') })
