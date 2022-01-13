// reduce 
const numbers = [1, 2, 3, 4];

// acc(accumulator 누산기) :  
// el : 배열의 요소가 전달
// i : 배열의 요소의 index 가 전달 
// arr : 메소드을 호출한 배열이 전달

// numbers.reduce((acc, el, i, arr) => {
//   return nextAccValue;
// }, initialAccValue);

const sumAll = numbers.reduce((acc, el, i) => {
  console.log(`${i}번 index의 요소로 콜백함수가 동작 중`)
  console.log('acc:', acc);
  console.log('el:', el);
  console.log('-------------');
  
  return acc + el;
}, 0);

console.log('sumAll:', sumAll)