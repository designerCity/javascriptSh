// Constructor Function ( 생성자 함수 )
// 객체 생성시에 new 를 붙여서 호출해줘야 한다.
// 함수의 이름의 첫 번째 글자를 대문자로 적어줘야 한다. (관습이다.)

// this = Constructor Function으로 생성하는 해당 객체를 가리킴
function User(email, birthdate) {
  this.email = email;
  // this = Constructor Function으로 생성하는 해당 객체를 가리킴
  this.birthdate = birthdate;
  this.buy = function (item) {
    console.log(`${this.email} buys ${item.name} for ${item.price}원`)
  };
}

const item = {
  name: '스웨터',
  price: 30000, 
};

const user1 = new User('tpgud7@nate.com', '1989-08-29')
const user2 = new User('tpgud77@nate.com', '1989-08-29')
const user3 = new User('tpgud777@nate.com', '1989-08-29')

console.log(user1.email); // tpgud7@nate.com
console.log(user2.email);
console.log(user3.email);
console.log(user1.birthdate); // 1989-08-29
user1.buy(item); // tpgud7@nate.com buys 스웨터 for 30000원 

