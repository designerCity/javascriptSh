// JSON 데이터로 존재하는 유저 정보를 받아서 각 정보 중 이름을 나타내는 name 프로퍼티와, 이메일 주소를 나타내는 email 프로퍼티만 추출해서 그 정보로만 이루어진 객체 배열을 리턴


function removeUnnecessaryInfo(users) {
  const processedUserList = users.map((user) => {
    const keys = Object.keys(user);
    const processedUser = {};
    keys.forEach((key) => {
      if (key === 'name' || key === 'email') {
        processedUser[key] = user[key];
      }
    });
    return processedUser;
  });
  const p = new Promise((resolve) => {
    setTimeout(() => { resolve(processedUserList); }, 1000); 
  });
  return p;
}

fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json())
  .then((result) => removeUnnecessaryInfo(result))
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log('This job will be done by server soon!');
  })
