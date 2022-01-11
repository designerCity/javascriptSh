// 객체를 활용한 destructing
const macbook = {
  title : '맥북프로',
  price : '2500000',
  memory: '16GB',
  storage: '1TB SSD'
}

// 요소를 index 순서대로 한 배열과는 다르게 프로퍼티 name을 
// // 사용하기에 순서 상관이 없다.
// const {title, price} = macbook;
// // 존재하지 않은 값을 할당하면 undefined가 return 된다.


// 할당 연산자를 통해 기본값을 설정해줄 수 있다.
const {memory, color = 'sliver'} = macbook
console.log(title)
console.log(price)
console.log(color)


// rest parameter 를 이용하듯 사용도 가능함.
const {title, ...rest } = macbook


// 프로퍼티 name 변경 (title => product 로) 
// 변수 이름이 문자열일 떄 사용해야함.
const {title: product, ...rest } = macbook
console.log(product)
console.log(rest)