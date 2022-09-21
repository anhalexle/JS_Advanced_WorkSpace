// "use strict";//Đầu file

// var fullName = 'Nguyen Van A'

// function testFunc() {
//   "use strict";
//   var  age = 18    
// }

// testFunc()

// console.log(fullName)
// console.log(age)

// const student = Object.freeze({
//   fullName: 'Nguyen Van A'
// })
// const student ={}
// Object.defineProperty (student, 'fullName', {
//   value: 'Nguyen Van A',
//   //mặc định là false
//   writable: true
// })

// student.fullName = 'Nguyen Van B'

// console.log(student)

// const student ={
//   fullName: 'Anh Le'
// }

// // delete student

// console.log(student)

//thằng khai báo sau bị ghi đè

// function sum (a, a) {
//   return a + a;
// } 

// console.log(sum(6, 9))//18 thay vì 15 do a= 9 ghi đè lên a = 6


// {
//   function sum (a,b) {
//     return a + b; 
//   }
// }

// console.log(sum(9,6))

//tránh trùng keyword có sẵn trong ngôn ngữ

'use strict';

const private = 123

console.log(private)