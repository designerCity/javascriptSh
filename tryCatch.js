// // try catch 문
// try {
//   // 코드 
// } catch (error) {
//   // 에러가 발생했을 떄 동작할 코드
// }

try {
  console.log('에러전');
  
  const shcode = 'shcode';
  console.log(shcode);
  
  shcode = 'good'; // 이 줄에서 에러가 발생하면서 에러 객체가 생성된다.
  
  const language = 'JavaScript';
  console.log(language);
} catch (error) { // error 에는 원하는 이름을 사용해도 된다. 
  console.log('에러 후')
  console.error(error)
} 

// try catch 활용하기 
// code block 이기 블록 스코프를 가지는 let, const 변수를 다룰때 주의하기 
// 실행 가능한 error 에 관해서 다루는 것 : 예외 처리 (exception Handling)
function printMembets(members) {
  try {
    for (const member of members) {
      console.log(member);
    }
  } catch (err) {
    console.error(err);
    alert(`${err.name}가 발생했습니다. 콘솔창을 확인해주세요`)
  }
}

const team1 = ['세형', '지완', '준성', '진혁'];
printMembets(team1);

const shartsc = { name : 'sh'};
printMembets(shartsc);

const team2 = ['영훈', '세흔', '성훈'];
printMembets(team2)

// 에러 발생 뒤에도 프로그램이 멈추지 않는다. (안정적인 프로그램 생성가능)
