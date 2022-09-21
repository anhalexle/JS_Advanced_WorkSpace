// const teacher = {
//     firstName: "Minh",
//     lasName: "Thu",
// }

// function greet(greeting, message) {
//     return `${greeting} ${this.firstName} ${this.lasName} ${message}`
// }

// let result = greet.apply(teacher, ['Em chào cô', 'Cô dạy môn gì thế ạ? [Đã xem cô live stream 1 tiếng]'])

// console.log(result)


// // So sánh với call() method
// result = greet.call(teacher, 'Em chào cô', 'Cô dạy môn gì thế ạ? [Đã xem cô live stream 1 tiếng]')

// console.log(result)

//Function borrowing

// const teacher = {
//     firstName: "Minh",
//     lastName: "Thảo",
//     isOnline: false,
//     goOnline() {
//         this.isOnline = true;
//         console.log(`${this.firstName} ${this.lastName} is Online`);
//     },
//     goOffline() {
//         this.isOnline = false;
//         console.log(`${this.firstName} ${this.lastName} is Offline`);
//     },
// }

// const me = {
//     firstName: 'Anh',
//     lastName: 'Le',
//     isOnline: false,
// }
// console.log('Teacher:', teacher.isOnline)
// teacher.goOnline()
// console.log('Teacher:', teacher.isOnline)

// console.log('---------------------------')

// console.log('Student:', me.isOnline)
// teacher.goOnline.apply(me)
// console.log('Student:', me.isOnline)

//Extends: kế thừa

// function Animal (name, weight) {
//     this.name = name;
//     this.weight = weight;
// }

// function Parrot () {
//     //C1
//     // Animal.apply(this, [name, weight]);
//     //C2 không truyền đối số
//     //vì arguments mặc định là nhận mảng
//     Animal.apply(this, arguments)
//     this.speak = function () {
//         console.log('Nhà có khách')
//     }
// }


// const conVet = new Parrot('Vẹt', 300)

// console.log(conVet)
// conVet.speak()

//So sánh

function fn() {}

console.log(fn.bind === Function.prototype.bind) //true
console.log(fn.call === Function.prototype.call) //true
console.log(fn.apply === Function.prototype.apply) //true

