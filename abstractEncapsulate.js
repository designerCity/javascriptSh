// 객체 지향 프로그래밍 핵심 개념 4가지 기둥 
// 추상화 : 어떤 구체적인 존재를 원하는 방향으로 간략화해서 나타내는 것
          // 주의점 : 협업할 수 있게 naming 을 하는 것이 좋다.
                   // 코멘트를 이용하여 협업 시 소통이 원활하게 만든다. 
                   // 문서화하여 공유하기도 한다. 

// 캡슐화 : 객체의 특정 프로퍼티에 직접 접근하지 못하도록 막는 것 
          // 협업을 하는 사람들이 객체 내부의 프로퍼티 값을 이상하게 설정하는 것을 막을 수 있다. 
          // 이를 통해 프로그램의 안정성을 높일 수 있다. 
class User {
  constructor(email, birthdate) {
    this.email = email;
    this.birthdate = birthdate;
  }
  
  buy(item) {
    console.log(`${this.email} buys ${item.name}`);
  }
  // getter method 는 프로퍼티의 값을 구하는 메소드 
  // 프로퍼티를 읽는 용도로 사용된다. 
  get email() {
    return `Email Address is ${this._email}`;
  }
  
  // setter method
  // 프로퍼티(email)에 접근하는 것을 막는 방법 => 접근 시 이 함수가 실행됨.
  set email(address) {
    if (address.includes('@')) { // 값에 대한 유효성 검사
      this._email = address; // 숨기고자하는 프로퍼티 이름은 맨앞에 _를 붙이는 경우가 많다.
    } else {
      throw new Error('invalid email address')
    }
  }
}

const item = {
  name: '스웨터',
  price: 30000,
};

const user1 = new User('tpgud777@nate.com', '1999-04-25');
user1.email = 'SeHyeung@nate.com'
console.log(user1._email); // SeHyeung@nate.com
console.log(user1.email); // Email Address is SeHyeung@nate.com
// console.log(user1.email) 는 getter method 가 실행됨으로 인해 결과값이 다르다. 

