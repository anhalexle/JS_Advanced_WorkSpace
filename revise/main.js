// function createCounter() {
//     let counter = 0;
//     function increase() {
//         console.log('counter: ', counter)
//         return ++counter;
//     }

//     // return {
//     //     increase,
//     //     counter
//     // }
//     return increase;
// }
// //nhớ là nằm trong phạm vi của createCounter
// //khi gọi hàm increase thì nó sẽ truy cập vào biến counter (dù biến counter nằm trong hàm createCounter không ph global nhưng ta vẫn truy cập đc)
// const counter1 = createCounter()
// // qua thương thức trên ta đã tạo ra 1 phạm vi qua biến counter1 để lưu lại biến counter trong hàm createCounter nên mỗi lần gọi lại biến counter1 thì ta sẽ lấy được sự thay đổi của biến counter qua mỗi lần gọi
// console.log(counter1())
// //khi gọi lần đầu hàm increase sẽ truy cập vào biến counter nằm ngoài phạm vi của nó và tăng lên 1 và lưu vào phạm vi do biến counter1 tạo ra
// console.log(counter1())

// console.log(counter1())

// console.log(counter1())



// // console.log(counter1)


// function createStorage(keyLocal) {
//     const store = JSON.parse(localStorage.getItem(keyLocal)) ?? {}

//     const save = () => localStorage.setItem(keyLocal, JSON.stringify(store))
    
//     const storage =  {
//         get (keyObj) {
//             return store[keyObj]
//         },
//         set(keyObj, value) {
//             store[keyObj] = value
//             save()
//         },
//         delete(keyObj) {
//             delete store[keyObj]
//             save()
//         }
//     }
//     return storage
// }

// const profileSettings = createStorage('profile_name')

// profileSettings.set('name', 'Anh Le')

// console.log(profileSettings.get('name'))

// profileSettings.set('age', 18)

// console.log(profileSettings.get('age'))

// profileSettings.delete('name')

// const forgotSettings = createStorage('forgot_password')

// console.log(forgotSettings.get('name'))

// console.log(forgotSettings.set('name', 'Hehe'))

// function carCollection() {
//     const cars = []

//     return {
//         add(value) {
//             cars.push(value)
//         },
//         remove(value) {
//             for (var index in cars) {
//                 cars[index] === value && cars.splice(index, 1)
//             }
//         },
//         show() {
//             if(cars.length !== 0 ) {
//                 cars.forEach(car => console.log(car))
//             }
//             else console.log('No cars to show')
//         }
//     }
// }

// const customerCar = carCollection()

// customerCar.add('BMW')
// customerCar.add('Porsche')
// customerCar.add('Mercedes')




// // customerCar.show()

// customerCar.remove('BMW')
// customerCar.remove('Porsche')
// customerCar.remove('Mercedes')
// customerCar.show()


// const car =(() => {
//     console.log(this)
// })()

//this = window


// const app = (function() {
//     const car = []

//     return {
//         add() {
//             console.log(this)
//         }
//     }
// })()

// app.add()

// const app = (() => {
//     const car = [];
//     return {
//         add() {

//         }
//     }
// })()

// app.add()

// const $ = document.querySelector.bind(document)

// const $$ = document.querySelector.bind(document)

// const app = (() => {
//     const cars = ['BMW']
//     const input = $('#input')
//     const submit = $('#submit')
//     const root = $('#root')
//     //Việc return kiểu này sẽ giúp this mặc định hiểu là đối tượng tham chiếu tới cái hàm IIFE này sẽ là đối tượng được gán vào this
//     return {
//         add(car) {
//             cars.push(car)
//         },
//         remove(index) {
//             cars.splice(index, 1)

//         },
//         render() {
//             const html = cars.map((car, index) => `
//                 <li class = "test">${car}
//                     <span class="delete" data-set = "${index}" data-nameCar = "${car}">&times</span>
//                 </li>
//             `).join('')
//             root.innerHTML = html
//         },
//         handleDelete(e) {
//             //closest xài khá tiện
//             const deleteBtn = e.target.closest('.delete')
//             if(deleteBtn) {
//                 // const index = deleteBtn.getAttribute('data-set')
//                 const index = deleteBtn.dataset.index
//                 this.remove(index)
//                 this.render()
//             }
//         },
//         init() {
//             // Handle DOM Events
//             // console.log(this)
//             submit.onclick = () => {
//                 this.add(input.value)
//                 this.render()
//                 input.value = null
//                 input.focus()
//             }
//             root.onclick = this.handleDelete.bind(this)
//             this.render()
//         }
//     }
// })()

//Vì này là IIFE nên vừa tạo vừa gọi hàm nên sau khi gọi hàm xong đống object được return về sẽ gán lên app hay this bây giờ sẽ là app (bên trong IIFE)
// app.init()//app chính là cái object được trả về :D
//app.render() thì nó sẽ tự động gán app vào this


const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);

const[name , value] = fruits
console.log(name, value)