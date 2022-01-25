// https://learn.codeit.kr/api/members 을 웹 브러우저에 치면
// 해당 url 에 get method 를 사용하는 것과 같다.

// fetch('https://learn.codeit.kr/api/members/3')
//   .then((response) => response.text())
//   .then((result) => { console.log(result); });
  
const newMember = {
  name: 'Jerry',
  email: 'jerry@codeitmail.kr',
  department: 'engineering',
};

fetch('https://learn.codeit.kr/api/members', {
  method: 'POST',
  body: JSON.stringify(newMember), // body 에 객체를 string 화하는 code // parse <--> stringify 
}) // 객체 하나인 argument 는 request 에 관한 각종 설정을 적는 란임. (이 객체는 option Object (: 바디의 내용을 설정한다) 라고 한다.)
// get 을 제외한 나머지 method 에는 option object 가 필요하다.
  .then((response) => response.text())
  .then((result) => { console.log(result); });
  
// id: 6  
// 결과값은 서버마다 다르다.
