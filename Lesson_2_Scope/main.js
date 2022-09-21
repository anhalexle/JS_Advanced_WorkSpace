//Global
// var  message = 'Học về scope 2'

// function log() {
//     console.log('in ra log')
// }

// // console.log(message)
// function logger() {
//     // console.log(message)
//     log()

// }
// logger()


//Code block
// {
//     //code
//     var age = 18;
// }

// console.log(age);

// //if else

//Local - scope
// function logger () {
//     // var fullName = 'Anh Le'
//     // function logger2 () {
//     //     console.log("Log 2")
//     // }
//     // logger2()
//     const message = 'THUOC CODE LOG'
// }
// console.log(fullName);   

// logger()

// Khi gọi hàm sẽ tạo ra 1 phạm vi mới


// function logger (first, last) {
//     console.log(first, last);
// }

// logger('Son', 'Dang')
// logger('Anh', 'Le') 
// logger('Phuoc', 'Huu')
//Mỗi hàm khi được gọi sẽ tự tạo ra 1 phạm vi riêng của nó, nên 3 hàm được gọi là 3 phạm vi riêng
//4 phạm vi: 1 local và 3 global


//Các hàm có thể truy cập các biến được khai báo trong phạm vi của nó và ngoài phạm vi của nó
//bên trong nó
// const fullName = 'Anh Le'

// function logger (first, last) {
//     console.log(first, last);
//     // const age = 20;
//     // console.log(age, fullName)
// }

// logger('Son', 'Dang')
// logger('Anh', 'Le') 
// logger('Phuoc', 'Huu')

//bên ngoài nó

// const age = 16

// function logger() {
//     const age = 18;

//     function logger2() {
//         console.log(age)
//     }
//     logger2();
// }

// logger()

//cách thức 1 biến được truy cập (lấy biến phạm vi gần nhất)

// const age = 18
// {
//     const age = 16
//     {
//         const age = 12 
//         {
//             const age = 10
//             {
//                 const age = 8
//                 console.log(age) //8
//             }
//         }
//     }
// }

//Khi nào 1 biến bị xóa khỏi bộ nhớ
//Biến toàn cầu: giá trị bị xóa khi chương trình bị thoát (bấm F5)
//Biến trong code block và trong hàm
// {
//     const age = 16
//     console.log(age)
// }
//Thoát khỏi phạm vi thì biến age bị xóa

// function logger() {
//     const rand = Math.random();
//     console.log(rand)
// }

// logger()
//Hàm thực thi xong thì biến rand bị xóa

//Biến trong hàm được tham chiếu bởi 1 hàm
//Tham chiếu tới hàm
function makeCounter () {
    let counter = 0;
    function increase () {
        return ++counter;
    }
    return increase
}


const increase1 = makeCounter();
console.log(increase1())//nhận increase và gọi increase
console.log(increase1())
console.log(increase1())
//Tham chiếu đến phần tử return trong hàm

// function makeCounter() {
//     let counter = 0;
//     function increase () {
//         return ++counter;
//     }
//     return increase ()

// }

// var res = makeCounter()

// console.log(res)
