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
