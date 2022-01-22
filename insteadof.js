// 다형성 : 하나의 변수가 여러 종류의 객체를 가리킬 수 있는 성질 

// instanceof 연산자 : 객체가 어느 class 로 만든 객체인지 알고 싶을 때

class User {
  constructor(email, birthdate) {
    this.email = email;
    this.birthdate = birthdate;
  }
  
  buy(item) {
    console.log(`${this.email} buys ${item.name}`);
  }
}
class PremiumUser extends User {
  constructor(email, birthdate, level) {
    super(email, birthdate)
    this.level = level;
  }
  buy(item) {
    console.log(`${this.email} buys ${item.name} with a 5% discount`)
  }
  streamMusicForFree() {
    console.log(`Free music streaming for ${this.email}`)
  }
}
const item = {
  name: '스웨터',
  price: 30000,
}

const user1 = new User('tpgud777@nate.com', '19990425')
const pUser1 = new PremiumUser('tpgud777@nate.com', '19990425')

const users = [user1, pUser1];

// 사용방법 
users.forEach((user) => {
  console.log(user instanceof PremiumUser);
})
// false
// true

// 주의사항 : 자식 class 로 만든 객체는 부모 class 로도 인정이 된다.
users.forEach((user) => {
  console.log(user instanceof User);
})
// true
// true

