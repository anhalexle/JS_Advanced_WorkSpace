//Function Expression

// const callNow = function () {
//     console.log('NOW')
// }

// callNow()

//IIFE

// (function () {
//     console.log('Now Now');
// }) ()

//Arrow function
// (() => {
//     console.log('Now Now');
// }) () 

//Truyền argument

// (function (message) {
//     console.log('message: ' + message);
// }) ('Chào bạn');


//Dùng dấu ; trước IIFE
//Ăn lỗi "Anh Le" is not a fucntion
// let fullName = 'Anh Le'

// ;(function () {

// }) ()

//IIFE là 1 hàm "private"

// let i = 0
// //gọi lại được bằng đệ quy
// ;(function myFunc() {
//     // console.log('Now');
//     i++;
//     console.log(i);
//     if(i<10)
//         myFunc();
// }) ()

// myFunc();

//IIFE sử dụng khi nào: tránh tình trạng trùng tên biến, function ảnh hưởng đến dự án

// ;(function () {
//     let fullName = 'Anh Le';
//     console.log(fullName);
// }()) 



// console.log(fullName);


//VD
//nếu code như vậy thì tính an toàn dữ liệu cho biến car không còn nên dùng IIFE
const app = (function () {
    const cars = []
    return {        
        add(car) {
            cars.push(car);
        },
        edit (index, car) {
            cars[index] = car;
        },
        delete (index) {
            cars.splice(index, 1);
        },
        show() {
            cars.forEach(car => {
                console.log(car);
            })
        },
        get(index) {
            return cars[index];
        }
    }
}) ()