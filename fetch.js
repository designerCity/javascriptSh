// 웹 브라우저에서 구글 홈페이지 url 로 요청을 보내고,
// 그 응답을 받아서 출력
// 웹 브라우저에서 서버로 보내는 요청은 request
// 서버가 보내주는 응답은 response
fetch('https://www.google.com/') // fetch 는 가져오다라는 뜻
// fetch 함수는 파라미터로 넘어오는 url로 request 를 보내고 response 를 받는 함수이다
  // then method 는 callback 을 등록해주는 method 이다. 
                  // 서버의s response 가 왔을 때 그 callback 이 실행된다.
  .then((response) => response.text()) // callback 함수이다. 
// .then((response) => { return response.text()}) 원래 이런 코드인데 생략한 코드이다.
  .then((result) => { console.log(result); }); // 이전 콜백의 retrun 값(response.text())을 
                                               // 다음 callback 이 넘겨 받을 수 있다 (result). 
  
