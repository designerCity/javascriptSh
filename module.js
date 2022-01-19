// 모듈화 : 공통된 기능이나 특별한 목적에 따라 각각의 파일로 분리하는 과정
// 모듈 : 각각의 파일
// 부피가 큰 프로그램에서 각 기능별로 분리해서 관리하는 것이
// 코드 유지 보수에 유리하다. 코드를 효율적으로 관리가능하고
// 다른 프로그램에서 재사용 가능하다.

// 모듈 파일이 가져야하는 몇 가지 조건
// 1 // 모듈 스코프 : 모듈만의 독립적인 스코프

// 중복되지 않게 모듈스코프를 가지게 하기 위해서는 type='module'을 적어줘야함.
// <script type="module" src="dnasd.js"></script> 이런 식으로 
// vscode 의 왼쪽의 extentions 를 클릭한 후 검색란에 live server를 입력 설치 후 html 파일에 들어가 
// 하단의 go live 를 누르게 되면 서버를 통해 실행된 html 파일이 실행이 된다.
// 모듈 스코프를 모두 주어준 상황이 되는 것이다. 
//  live server 는 저장만 하면 결과를 보여준다.


// 모듈 문법
export const title = 'SeHyeug' // 다른 파일에서도 사용 가능하게 됨.
// named export
import { title, print } from '모듈 파일의 경로' // 사용하고자 하는 파일에서 불러옴
import {변수, 함수} from '모듈 파일 경로'


// 불러온 변수, 객체, 함수 등 이름 바꾸기
import { title as printerTitle, print } from '모듈 파일의 경로' 
// 불러온 title 변수가 현재 파일에서는 printerTitle 이라는 이름으로 사용이 될 것임을 보여준다.

// 한꺼번에 다루기(모듈의 모든 것을 불러오고 싶을 경우)
import * as printerJs from './printer.js' // 'printer.js' 의 모든 파일은 printerJS 로 바꾸어서 정리한다.
// * : 와일드카드 문자 
// * 은 하나의 객체로 모으는 것이기에 
export {변수, 함수}


// default export <-> named export
// 한 대상만 exprot 가능 
// 한 모듈 파일에서 딱 한번만 사용 가능하다.

// 형태 
// export default 한 대상만
export default 'title' // 바로 값 하나만을 전달도 가능

// import 시
// 방법 1
import {default as 이름 붙이기} from './파일이름'
// 방법 2
import 이름, {} from './파일이름'