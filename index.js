console.log('Hello, World!')



// Object Literal (객체를 나타내는 문자열)

const user = {
  email: 'tpgud10@naver.com',
  birthdate: '1999-04-25',
  // email, birthdate = 프로퍼티(property)
  buy(item) {
    console.log(`${this.email} buys ${item.name}`);
  },            //this 는 현재 객체인 user 객체 자체를 의미
  // buy = 메소드(method)
};

const item = {
  name: '스웨터',
  price: 30000,
};

console.log(user.email); // tpgud10@naver.com
console.log(user.birthdate); // 1999-04-25
user.buy(item) // tpgud10@naver.com buys 스웨터