// static 프로퍼디, static method  : class 에 직접적으로 딸려있는 프로퍼티와 method 
// 객체가 아닌 class 자체로 접근해야한다. 


// static 프로퍼디
// static method 

class Math {
  static PI = 3.14;
  
  static getCircleArea(radius) {
    return Math.PI * radius * radius;
  }
}

// 추가하기
Math.PI = 3.141592;
Math.getRectangleArea = function (width, height) {
  return width * height;
}

console.log(Math.PI);
console.log(Math.getCircleArea(5));
console.log(Math.getRectangleArea(4, 5))

console.log(Date.now())
