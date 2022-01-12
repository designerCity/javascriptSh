// filter 와 find (배열 메소드)
// filter : 원하는 조건에 맞는 요소만 추려내서 새로운 배열을 생성 
// 항상 return 값이 배열이다. 
const devices = [
  {name: 'GalaxyNote', brand: 'Samsung'},
  {name: 'MacbookPro', brand: 'Apple'},
  {name: 'ipad', brand: 'Apple'},
  {name: 'Imac', brand: 'Apple'},
  {name: 'GalaxyWatch', brand: 'Samsung'},
  {name: 'Gram', brand: 'LG'},
  {name: 'GalaxyBuds', brand: 'Samsung'},
  {name: 'ZenBook', brand: 'Asus'},
]

const apples = devices.filter((el) => el.brand === 'Apple');
console.log(apples)

const sumsungs = devices.filter((el) => el.brand === 'Samsung');
console.log(...sumsungs) // spread 로 배열을 벗겨낼 수 있음
// { name: 'GalaxyNote', brand: 'Samsung' } { name: 'GalaxyWatch', brand: 'Samsung' } { name: 'GalaxyBuds', brand: 'Samsung' }

// find : 유일한 하나의 값만 찾고 싶을 떄 \ 값을 찾는 순간 반복이 종료된다. 
// return 값이 배열이 아닌 값이다. 
const gram = devices.find((el) => el.name === 'Gram');
console.log(gram) // { name: 'Gram', brand: 'LG' }
