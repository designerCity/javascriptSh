// some 과 every
const numbers = [1, 3, 5, 7, 9];

// some : 조건을 만족하는 요소가 1개 이상 있는지
const someReturn = numbers.some((el) => el > 5);

// every : 모든 요소가 조건을 만족하는지 
const everyReturn = numbers.every((el) => el > 5);

console.log('some', someReturn);
console.log('every', everyReturn);