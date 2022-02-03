// Ajax 통신을 하는 함수 
// 1. fetch 함수
// 2. axios 라는 외부 패키지 사용 

// axios 패키지 사용한 코드 
axios
  .get('https://jsonplaceholder.typicode.com/users')
  .then((response) => {
    console.log(response)
  })
  .catch((error) => {
    console.log(error)
  })
  
// axios 객체
// axios 객체에서 리퀘스트를 보내는 많은 메소드들이 fetch 함수처럼 // Promise 객체를 리턴함.
// 장점
// 1. 모든 리퀘스트, 리스폰스에 대한 공통 설정 및 공통된 전처리 함수 삽입 가능
// 2. serialization, deserialization을 자동으로 수행
// 3. 특정 리퀘스트에 대해 얼마나 오랫동안 리스폰스가 오지 않으면 리퀘스트를 취소할지 설정 가능(request timeout)
// 4. 업로드 시 진행 상태 정보를 얻을 수 있음
// 5. 리퀘스트 취소 기능 지원

// 단점 : 별도의 다운로드가 필요한 패키지라는 점 
