// // PUT request 활용

// // id 2 번의 부서를 engineering 에서 marketing 으로 바꾸기 
// const member = {
//   name: 'Alice',
//   email: 'alice@codeitmail.kr',
//   department: 'marketing',
// };
// // id 2 번을 PUT request 를 쓰기 위해서 url 맨 뒤에 /2 붙여야 함.
// fetch('https://learn.codeit.kr/api/members/2', {
//   method: 'PUT',
//   body: JSON.stringify(member), // JS data 를 내보내서 수정해야하기 때문에
// }) 
//   .then((response) => response.text())
//   .then((result) => { console.log(result); });



// DELETE request

// DELETE request 를 사용해서, id 가 2 번인 data 삭제 
fetch('https://learn.codeit.kr/api/members/2', {
  method: 'DELETE',
}) 
  .then((response) => response.text())
  .then((result) => { console.log(result); });


// // // id 값을 모를 때
// GET을 통해서 멤버객체들이 담긴 배열을 가져오고, 해당 배열을 순회하면서 
// name프로퍼티가 'Alice'인 객체를 찾아서 다른 변수에 담아서 다루면 된다.
// 그 이후에는 
fetch(`https://learn.codeit.kr/api/members/${memberIdNum}`, {
  method: 'POST',
})
  .then((response) => response.text())
  .then((result) => { console.log(result); });
