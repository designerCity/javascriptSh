// Factory Function

// const user1 = {
//   email: 'tpgud10@naver.com',
//   birthdate: '1999-04-25',
//   buy(item) {
//     console.log(`${this.email} buys ${item.name}`);
//   },            
// };

// const user2 = {
//   email: 'hey99@google.com',
//   birthdate: '1997-05-29',
//   buy(item) {
//     console.log(`${this.email} buys ${item.name}`);
//   },
// };

// Factory Function : 객체를 생성하여 리턴하는 함수
// code 를 간추리는 방법
function createUser(email, birthdate) {
  const user = {
    email: email,
    birthdate: birthdate,
    // email,
    // birthdate, 로 적어도 똑같다.


    buy(item) {
      console.log(`${this.email} buys ${item.name}`)
    },
  };
  return user
}

// const item = {
//   name: '스웨터',
//   price: 30000,
// };
// objectLiteral.js 에서 item 이 정의되고 index.html 에서 둘을 불러왔기에 
// item 을 다시 정의하게 되면 SyntaxError 가 발생한다. 
const user1 = createUser('tpgud777@nate.com', '1999-02-25')
const user2 = createUser('tpgud77@nate.com', '1999-02-25')
const user3 = createUser('tpgud7@nate.com', '1999-02-25')

console.log(user1.email);
console.log(user2.email);
console.log(user3.email);

user1.buy(item)
user2.buy(item)
user3.buy(item)

// // 오류 : 파라미터로 item 을 받지 않기 떄문이다.
// console.log(user1)
// console.log(user2)
// console.log(user3)
