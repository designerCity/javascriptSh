
// JSON ( JavaScript Object Notation)
// 이름/값 쌍의 모음입니다. 다양한 언어에서 이것은 객체 , 레코드, 구조체, 사전, 해시 테이블, 키 목록 또는 연관 배열로 구현됩니다.
// 정렬된 값 목록입니다. 대부분의 언어에서 이것은 배열 , 벡터, 목록 또는 시퀀스로 구현

fetch('https://jsonplaceholder.typicode.com/users')
// 이 url 로 request 를 보내면 html이 아닌 다른 종류의 response 를 볼 수 있다.
// 어떤 사용자들의 정보를 json 이라는 데이터 format 으로 나타낸 것.
// 이런 json data response 는 js 문법과 비슷하다. 
  .then((response) => response.text())
  .then((result) => { console.log(result); });



// JSON property 의 특징 

// 1.  각 프로퍼티의 이름을 반드시 큰따옴표(")로 감싸줘야 함
const member = {
  name: 'Michael Kim',
  height: 180,
  weight: 70,
  hobbies: ['Basketball', 'Listening to music']
}; // JSON 에서는 불가 ( Object Literal )

// 2. JSON에서는 값이 문자열인 경우 큰따옴표(")를 사용해야 함
const member = {
  "name": "Michael Kim",
  "height": 180,
  "weight": 70,
  "hobbies": "Basketball", "Listening to music"]
}; // JSON 에서 가능한 문법.

// 3. undefined, NaN, Infinity 등을 JSON에서는 사용할 수 없음
// 4. SON은 코드가 아니라 데이터 포맷이기 때문에 그 안에 주석을 포함시킬 수 없다.





// JSON data 를 객체로 변환하기 

// JSON data 는 JS 의 string type 이다.
fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.text())
  .then((result) => { console.log(typeof result); });
  // string
  

fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.text())
  .then((result) => { 
    const users = JSON.parse(result);
    console.log(users.length); // 객체의 개수 
    users.forEach(user => {
      console.log(user.name) // 각 객체의 이름 
    });
  }); // 실 JS 배열로 변환
  // JSON 은 JSON data 를 다루기 위해서 사용되는 JS 의 기본 객체이다.
  

// Serialization(직렬화) : 자바스크립트 객체를 string 타입의 JSON 데이터로 변환하는 작업(리퀘스트를 보낼 때)
// Deserialization(역직렬화) : string 타입의 JSON 데이터를 자바스크립트 객체로 변환하는 작업(리스폰스를 받았을 때)


