// function random() {
//     console.log(Math.random())
// }
// //C1
// random()
// //C2
// random.call()

// const teacher = {
//     firstName: 'Minh',
//     lastName: 'Thu'
// }

// const me = {
//     firstName: 'Anh',
//     lastName: 'Le',
//     showFullName () {
//         console.log(this)
//         console.log(`${this.firstName} ${this.lastName}`)
//     }
// }
// //ăn undefined
// //bind trả ra hàm mới this mới chứ ko gọi hàm 
// //=> call = bind + gọi hàm 
// //kỹ thuật mượn hàm
// me.showFullName.call(teacher)

//trường hợp ngoài object
// 'use strict';
// this.firstName = 'Anh'
// this.lastName = 'Le'

// function getFullName () {
//     console.log(`${this.firstName} ${this.lastName}`)
// }

// // getFullName() //Anh Le //this = window //nhưng trong strict mode sẽ là undefined
// //C2
// getFullName.call(this)//this = window-> hết lỗi

// function Animal(name, weight) {
//     this.name = name;
//     this.weight = weight;
// }

// function Chicken(name, weight, legs) {
//     //giống kế thừa trong OOP
//     Animal.call(this, name, weight)
//     //Chicken.name = name
//     //Chicken.weight = weight
//     this.legs = legs;
// }

// const anhLe = new Chicken('Anh Le', 82, 2)

// console.log(anhLe)

//Borrow function

function logger() {
    //Mượn forEach trong mảng
    // console.log(arguments);
    // arguments.forEach(item => {

    // }) => ăn lỗi
    // Array.prototype.forEach.call(arguments, item => {
    //     console.log(item);
    // })//this=arguments

    // // const cars = ['BMW', 'Honda']
    
    // // cars.forEach(car => {
    // //     console.log(car);
    // // })
    //Mượn slice trong mảng
    // const arr = Array.prototype.slice.call(arguments)
    // arr.forEach(item => console.log(item))
    //Trả về mảng
    const arr =[...arguments]
    console.log(arr)
}

logger(1, 2, 3, 4, 5)