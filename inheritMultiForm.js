// 상속 : 하나의 객체가 다른 객체의 프로퍼티와 메소드를 물려받는 것
    // 장점 : 코드의 재사용성이 좋아진다. 
// 부모 class : base 가 되는 class 
class User {
  constructor(email, birthdate) {
    this.email = email;
    this.birthdate = birthdate;
  }
  
  buy(item) {
    console.log(`${this.email} buys ${item.name}`);
  }
}
// 상속하는 법 extends 
// 자식 class (derived class): 상속 받는 class
class PremiumUser extends User {
  constructor(email, birthdate, level) {
    // this.email = email;
    // this.birthdate = birthdate;
    super(email, birthdate) // 자식 class 로 객체 생성할 때는 반드시 그 생성자 함수 내에세 super 호출하여
    // 부모 class의 생성자 함수를 먼저 호출해야한다.
    this.level = level;
  }
  streamMusicForFree() {
    console.log(`Free music streaming for ${this.email}`)
  }
  // buy(item) {
  //   console.log(`${this.email} buys ${item.name}`);
  // }
}
const item = {
  name: '스웨터',
  price: 30000,
}

const pUser1 = new PremiumUser('tpgud777@nate.com', '1999-04-25', 3)
console.log(pUser1.email);
console.log(pUser1.birthdate);
console.log(pUser1.level);
pUser1.buy(item);
pUser1.streamMusicForFree();

// 부모 class 의 method 를 상속하는 방법 
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
  constructor(email, birthdate, level, point) {
    super(email, birthdate)
    this.level = level;
    this.point = point;
  }
  buy(item) {
    // console.log(`${this.email} buys ${item.name}`) 이 내용은 User 의 buy method 와 같으므로
    super.buy(item); // 이렇게 부모의 method 가 필요할 때는 이렇게 써도 된다. 
    this.point += item.price * 0.05
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

user1.buy(item)
pUser1.buy(item)

// 다형성 : 많은 형태를 갖고 있는 성질, 하나의 변수가 다양한 종류의 객체를 가리킬 수 있는 성질. 

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
  // 오버라이딩(overriding) : 자식 class 에서 부모에 있는 동일한 method를 정의하고
  // 그 내용을 다르게 채우는 것.
  // buy method 를 수정하고 싶을 때
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

user1.buy(item)
pUser1.buy(item)
