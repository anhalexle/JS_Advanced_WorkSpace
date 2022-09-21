// const iPhone7 = {
//     //Thuộc tính - Properties  
//     name: 'iPhone7',
//     color: 'Pink',
//     weight: 300,
   
//     //Phương thức - Method
//     takePhoto () {
//         console.log(this)
//         // return 'Hello'
//     },
//     objChild: {
//         name: 'Child Object',
//         methodChild() {
//             console.log(this)
//         }
//     }
// }

// // console.log(iPhone7.takePhoto());

// iPhone7.objChild.methodChild() //this = objChild

// var input = 'Hello'

// console.log(this.input)


// function Car (name, color, weight) {
//     this.name = name
//     this.color = color
//     this.weight = weight
//     this.run = function () {
//         console.log('Running...', this)
//     }
// }

// const mercedesS450 = new Car('Mercedes S450', 'black', 1200);

// console.log(mercedesS450.run()) //this = mercedesS450

// const button = document.querySelector('button');

// // console.log(button)
// button.onclick = function () {
//     console.log(this.innerText) //element  click vào hay this  = e.target
// }

// console.log(this)

//Trong strict mode thì this khai báo là global sẽ là undefined
// 'use strict';
// function myFunc () {
//     console.log(this)
// }
// //trừ trường hợp này là do window đứng trước dấu . nên this = window
// window.myFunc()
// 'use strict';
//hàm tạo function constructor 
function Car(name, color) {
    //tạo ra thuộc tính cho đối tượng được tạo
    this.name = name;
    this.color = color;
    // this.run = function () {
    //     console.log(this)
    // }
}


//C2
Car.prototype.run = function () {
    // console.log(this)
    // Context 
    // function test () {
    //     console.log(this)
    // }
    // //trong trường hợp này this = window do context của this được gọi là 1 function mà theo lý thuyết this khi được gọi trong function sẽ là window
    // test();
    // Arrow function thì bản thân nó ko có context nên trong arrow function có this thì this nó dựa vào context nằm ở bên ngoài trong trường hợp này là this = obj car
    const test = () => {
        console.log(this)
    }
    test()//this = obj car
}

const porsche = new Car('Porsche', 'yellow');
const mercedesS450 = new Car('Mercedes S450', 'black');

console.log(porsche.run()) //this = porsche

console.log(mercedesS450.run()) //this = mercedesS450


