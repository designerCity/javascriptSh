// Ajax(Asynchronous JavaScript And XML)는 웹 브라우저가 현재 페이지를 그대로 유지한 채로 서버에 리퀘스트를 보내고 리스폰스를 받아서, 새로운 페이지를 로드하지 않고도 변화를 줄 수 있게 해주는 기술
// ex) 구글 맵(Google Map)
// 가능한 이유 :현재 웹 페이지는 그대로 유지되고, 단지 그 밑에 명동 성당에 관한 간단한 정보창이 떠오를 뿐입니다. 이것이 가능한 이유는 웹 브라우저가, 사용자가 보고 있는 현재 페이지를 방해하지 않고 별도로 서버로 리퀘스트를 보내고, 리스폰스를 받아왔기 때문입니다.

// JavaScript 에서 XMLHttpRequest라고 하는 객체를 통해 Ajax 통신을 할 수 있습니다. XMLHttpRequest 사용가능 
 
const xhr = new XMLHttpRequest()
xhr.open('GET', 'https://learn.codeit.kr/api/members');
xhr.onload = function () {
  console.log(xhr.response);
};
xhr.onerror = function () {
  alert('Error!');
};
xhr.send();

// //  XMLHttpRequest 를 간접적으로 사용하는 이유 
// 1. XMLHttpRequest 객체 이후에 등장한 함수, 바로 fetch 함수를 사용해서 Ajax 통신을 할 수 있기 때문
// 2. axios라는 패키지가 존재하기 때문


// PATCH method : 새 데이터로 기존 데이터의 일부를 수정
               // 리퀘스트의 바디에 있는 내용을 기존 데이터의 각 속성과 대조 및 병합(merge-patch)하면서 데이터를 수정
// PUT method 는 기존 데이터를 아예 새로운 데이터로 덮어씀으로써 수정

// HEAD method :  GET 리퀘스트를 보냈을 때 받았을 리스폰스에서 바디 부분은 제외하고, 딱 헤드 부분만 받는다는 점이 다르 다.
               // 이렇게 실제 데이터가 아니라 데이터에 관한 정보만 얻으려고 하는 상황 등에 HEAD 메소드가 활용
               // 참고 `https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods`
               
// HTTP나 HTTPS 프로토콜을 기반으로 한 통신은 그 하위 프로토콜을 기반으로 이루어진다.
  
//   HTTP(HyperText Transmission Protocol)           고수준 프로토콜
//   TCP(Transmission Control Protocol)
//   IP(Internet Protocol)
//   Ethernet                                        저수준 프로토콜
