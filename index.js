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

data.forEach((todo, i) => { // 1번 조건
  const li = document.createElement('li'); // 2번 조건
  
  if (todo.isClear) {
    li.classList.add('item', 'done'); // 4번 조건
  } else {
    li.classList.add('item'); // 3번 조건
  }

  li.textContent = `${i + 1}. ${todo.title}`; // 5번 조건
  list.appendChild(li); // 6번 조건
});