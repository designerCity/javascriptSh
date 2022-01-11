// 배열 메소드 : forEach 와 map 
// for of 문 과 비슷하게 배열에서 반복적인 작업 
// push 통해서 추가할 떄는 무한 루프가 아닌, 
// 최초 실행 배열의 길이 만큼 실행된다.
// pop 을 사용해 줄일 떄는 반복횟수가 줄어든다
const members = ['세형', '진혁', '준성', '지완']
const lastNames = ['감', '최', '박', '백']
for (let member of members) {
  console.log(`${member}님이 입장하셨습니다.`);
}

// forEach 뒤에 argument 로 callback 함수를 작성 
// callback 함수의 첫 번쨰 파라미터로 배열의 요소를 순서대로 전달
members.forEach(function(member) {
  console.log(`${member}님이 입장하셨습니다.`);
})
// 두번쨰 파라미터로 요소의 index를 관리 가능
members.forEach(function(member, i) {
  console.log(`${lastNames[i]}${member}님이 입장하셨습니다.`);
})

// 세번째 파라미터는 반복적인 배열 자체가 전달됨.
members.forEach(function(member, i, arr) {
  console.log(`${lastNames[i]}${member}님이 입장하셨습니다.`);
  console.log(arr)
})


// map method : forEach 와 거의 비슷함.
// 다른 점 : 새로운 배열을 return 함.

const fullName = members.map(function(member, i) {
  return lastNames[i] + member
})
console.log(fullName)
