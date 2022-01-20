// class 
// 프로퍼티와 메소드를 분리한다. 
// 보통 프로퍼티를 constructor 안에, metho 를 그 밖에 놓는다. 
// 앞에 new 를 붙여서 객체를 생성 가능하다. 
class User {
  // constructor (생성자) : 객체가 생성될 떄 시행된다.
  constructor(email, birthdate) {
    this.email = email;
    this.birthdate = birthdate;
    // this 는 생성되는 객체를 나타낸다.
    // 따라서 this.email 과 this.birthdate 는 매번 생성되는 새로운 객체의 프로퍼티 값이 된다,
  }
  
  buy(item) {
    console.log(`${this.email} buys ${item.name}`)
  }
}

const item = {
  name: '스웨터',
  price: 30000, 
};

const user1 = new User('tpgud7@nate.com', '1989-08-29')

console.log(user1.email); // tpgud7@nate.com
console.log(user1.birthdate); // 1989-08-29
user1.buy(item); // tpgud7@nate.com buys 스웨터

const user2 = new User('tpgud787@nate.com', '1969-07-25')

console.log(user2.email); // tpgud787@nate.com
console.log(user2.birthdate); // 1969-07-25
user2.buy(item); // tpgud787@nate.com buys 스웨터
