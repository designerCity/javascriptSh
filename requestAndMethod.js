// 요청 (request) 의 종류
                          // 해당되는 method 
// 1. 데이터 추가 (Create) ---- POST          body 가 필요
// 2. 데이터 조회 (Read)   ---- GET           body 가  x
// 3. 데이터 수정 (Update) ---- PUT           body 가 필요 
// 4. 데이터 삭제 (Delete) ---- DELETE        body 가  x

// 하나의 request 는 (Head + Body) 로 이루어져 있다.
// Head : request 에 대한 부가 정보 (method 값이 Head 에 존재한다.)
// Body : 실제 data 를 담는 부분

// 개발자 도구의 Network 탭에서는 request 와 response 를 살펴볼 수 있다.
// 여기서 Head 를 확인할 수 있다. Head : (키 + 값)으로 이루어진 쌍
