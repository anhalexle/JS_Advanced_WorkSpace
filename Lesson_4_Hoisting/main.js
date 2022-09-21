//Hoisting
// var age
// console.log(age)

// // console.log(fullName)

// age = 16

// console.log(age)

//let và cost khi được hoisted mà không được tạo giá trị thì sẽ bị đẩy vào "Temporal Dead Zone"

// {
    
//     console.log(fullName)
//     let fullName = "Nguyen Van A"
// }

// let fullName = "Nguyen Van A"

// {
//     let fullName = "Nguyen Van B"
//     {
//         //ăn lỗi vì nó tìm được biến fullName nhưng bị khai báo sau
//         console.log(fullName)
//         let fullName = "Nguyen Van C"
//     }
// }

//Hoist với hàm là đem hàm lên đầu như biến

// const counter1 = makeCounter() 

// console.log(counter1())

// function makeCounter() {
//     function increase() {
//         return ++counter
//     }
//     let counter = 0
//     return increase

//     // function increase() {
//     //     return ++counter
//     // }
// }
//Result: I hava NaN husband
var tip = 100;

(function () {
  console.log("I have $" + husband());

  function wife() {
    return tip * 2;
  }

  function husband() {
    return wife() / 2;
  }

  var tip = 10;
})();
// Output: ?
//Lý do: đây là IIFE nên khi tìm được biến tip trong function
// sẽ tiến hành hoisted thành 
/**
    var tip
    console.log("I have $" + husband());

    function wife() {
        return tip * 2;
    }

    function husband() {
        return wife() / 2;
    }
    tip = 10
 */
//và như lý do trên tip khi được gọi vào function wife trả về undefined  khi * 2 vào sẽ thành NaN