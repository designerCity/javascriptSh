const list = document.querySelector('.list');
const data = [{
    title: '자바스크립트 공부하기',
    isClear: true,
  }, {
    title: '독서하기',
    isClear: false,
  }, {
    title: '수학 과외하기',
    isClear: true,
  }, {
    title: '독서하기',
    isClear: true,
  }, {
    title: '영어 공부하기',
    isClear: false,
  }
];


data.forEach((todo, i) => { 
  const li = document.createElement('li'); // 새로운 list 를 추가하기 위해서 index.html 의 <li> 를 생성
  
  if (todo.isClear) {
    li.classList.add('item', 'done'); // 생성한 <li> 가 isClear === true 면 'item', 'done' 두 class 를 추가 
  } else {
    li.classList.add('item'); // 생성한 <li> 가 isClear === false 면 'item' class 를 추가 
  }

  li.textContent = `${i + 1}. ${todo.title}`; // <li> 안에 들어갈 컨텐츠를 생성하여 li.textContent 를 이용해 집어넣어주고 
  list.appendChild(li); // 마지막에 반복적으로 집어 넣으면서 순서대로 정렬되기끔 
});
