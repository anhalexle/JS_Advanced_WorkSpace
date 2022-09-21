// let a = 1
// let b = a

// a = 2

// console.log(b)

// let a = {
//     name: 'Mercedes'
// }

// let b = a

// a.name = 'BMW'

// console.log(b)//BMW vì là reference type

//Reference type là chép địa chỉ vùng nhớ thay vì giá trị trong ô nhớ của kiểu tham trị


// let a = {
//     name: 'Mercedes'
// }

// //tạo ra 1 object mới
// a = {
//     name: 'BMW',
//     model: 'i8'
// }
//a sẽ có 2 địa chỉ tương ứng vs 2 ô nhớ

//trỏ vào cùng 1 ô nhớ

// const a = {
//     name: 'Mercedes'
// }


// // có cùng 1 địa chỉ là địa chỉ của a 
// const b = a
// const c = b
// const d = c

// b.name = 'BMW'
// console.log(a.name) //'BMW'

// c.name = 'Porsche'
// console.log(a.name) //'Porsche'

// d.name = 'Range Rover' //'Range Rover'
// console.log(a.name)


// let a = {
//     name: 'BMW'
// }

// const b = a
// b.name = 'Honda'

// console.log(a.name) //'Honda'

// a ={
//     name: 'Range Rover',
//     model: 'i8'
// }

// console.log(a.name) //'Range Rover'

//Trường hợp Object chứa 1 object con

// const student = {
//     name: 'Anh Le',
//     profile: {
//         firstName: 'Anh',
//         lastName: 'Le',
//         introduction: 'Boy'
//     }
// }
// //tạo ô nhớ cho object của profile trước sau đó tạo thêm ô nhớ chứa thêm object student

// const studentProfile = student.profile

// // student.profile.introduction = 'Good boy'
// studentProfile.introduction = 'Handsome Boy'

// console.log(studentProfile) //Good Boy //Handsome Boy

//tham trị là mỗi biến là mỗi vùng nhớ
// function sum (a, b) {
//     //let a = c 
//     //let b = d
//     a = 0
//     b = 0
//     console.log(a, b)
// }
// //c, d là kiểu tham trị
// const c = 1
// const d = 2 


// sum(c, d)

// console.log(c, d)

// function createCar(obj) {
//     //let obj = a
//     // obj = JSON.parse(JSON.stringify(obj)); //tạo object mới thành 1 vùng nhớ mới
//     obj = {...obj}
//     obj.name = 'Mercedes'
//     // console.log(obj) //Mercedes
//     return obj
// }

// const car = {
//     name: 'BMW'
// }

// const newCar = createCar(car)

// console.log(car) //Mercedes
// console.log(newCar) //Mercedes

//Side effect: tác dụng phụ

//Cách sửa là dùng obj = JSON.parse(JSON.stringify(obj)); (dùng cho nhìu dữ liệu)
//C2 là dùng spread


//So sánh 2 object

const a = {
    name: 'BMW'
}

// const b = {
//     name: 'BMW'
// }
// const b = a
// //a=#001 và b=#002 trả về địa chỉ vùng nhớ
// console.log(a === b) //false
//trỏ vào địa chỉ vùng nhớ và sửa key chứ không sửa địa chỉ vùng nhớ của a
//chỉ lỗi khi
a = 'Mercedes'//vì tạo ra 1 vùng nhớ mới
a.name = 'Mercedes'

console.log(a)
