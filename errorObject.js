// error 와 error object 

// name (프로퍼티), message (구체적인 내용을 담은 프로퍼티)
// ReferenceError : 존재하지 않는 변수나 함수를 호출할 떄 생기는 에러
// TypeError : 자료형을 잘못된 방식으로 다룰 때 생기는 에러 
// SyntaxError : 문법에 맞지 않는 코드를 사용할 때 생기는 에러 

// 의도적으로 만드는 에러 
const error = new TypeError('타입 에러가 발생했습니다.')

console.log(error.name)
console.log(error.message)

// // error 를 발생시키는 방법 : throw -error 객체이름-
// throw error;