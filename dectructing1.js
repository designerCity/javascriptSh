// 구조 분해 (destructing)

const rank = ['세형', '지완', '준성', '진혁']

// const samsong = rank[0];
// const mac = rank[1]
// const [samsong, mac, ipad] = rank;
// 배열의 길이가 넘치는 요소는 순서대로 정렬이 된다. 
// 배열의 길이가 더 짧으면 return 이 undefined 가능

// 기본값 설정 가능하다.
const [samsong, mac, ipad = '없음'] = rank;

// const [samsong, mac, ...ipad] = rank;
// rest parameter 처럼 나머지 것들을 할당한다.

console.log(samsong)
console.log(mac)
console.log(ipad)

// 변수 교환
let macbook = '지완';
let ipod = '세형';

console.log('macbook 소유', macbook);
// macbook 소유 지완
console.log('ipod 소유', ipod);
// ipod 소유 세형

// destructing 을 이용한 변수 교환s
[macbook, ipod] = [ipod, macbook]

console.log('macbook 소유', macbook); // macbook 소유 세형
console.log('ipod 소유', ipod); // ipod 소유 지완
