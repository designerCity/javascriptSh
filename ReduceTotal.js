const data = [ 
  { company: 'Naber', month: 3 },
	{ company: 'Amajohn', month: 12 },
	{ company: 'Coogle', month: 10 },
  { company: 'Ittel', month: 6 },
  { company: 'Sasung', month: 4 },
  { company: 'CaCao', month: 3 },
	{ company: 'Microhard', month: 17 },
];

const totalCareer = data.reduce((acc, el, i) => {
  return el.month + acc;
},0)

console.log(`세형이의 경력은 총 ${totalCareer}개월입니다.`)
