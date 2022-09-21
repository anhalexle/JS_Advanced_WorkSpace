// function createCounter() {
//     let counter = 0;

//     function increase () {
//         return ++counter;
//     }

//     return increase;
// }

// const counter1 = createCounter();
// //biến tăng đều mỗi lần gọi lại counter1 vì nó truy cập  cùng 1 phạm vi mà counter1 đã tạo ra sẵn
// //khi xài createCounter()
// console.log(counter1())//1
// console.log(counter1())//2 do counter khi gọi lại trong counter1 là cùng 1 môi trường nên khi gọi lại nó sẽ tự động lấy giá trị của counter đã được gọi ở hàm trước đó
// console.log(counter1())
// console.log(counter1())


// //trường hợp tạo ra1 phạm vi mới thì biến counter sẽ được set lại như ban đàu
// const counter2 = createCounter() 

// console.log(counter2())
// console.log(counter2())
// console.log(counter2())
// console.log(counter2())


// function createLogger (namespace) {
//     function logger (message) {
//         console.log(`[${namespace}] ${message}`)
//     }
//     return logger
// }

// //====App

// //Register.js


// const infoLogger = createLogger('Info')

// infoLogger('Gửi mail lỗi lần 1, thử gửi lại')
// infoLogger('Gửi mail thành công cho user xxx')

// //Forgot Password

// const errorLogger = createLogger('Error')

// errorLogger('Email không tồn tại trong DB')
// errorLogger('Gửi mail thành công cho user xxx')

// function createStorage(key) {
//     //??: nếu vế trái là undefined hay null thì lấy vế sau
//     const store = JSON.parse (localStorage.getItem(key)) ?? {}

//     const save = () => {
//         localStorage.setItem (key, JSON.stringify(store))
//     }
//     const storage = {
//         get(key) {
//             return store[key]
//         },
//         set(key, value) {
//             store[key] =value
//             save()
//         },
//         remove(key) {
//             delete store[key]
//             save()
//         }
//     }

//     return storage
// }

// ///Profile.js

// const profileSetting = createStorage('profile_setting')

// // profileSetting.set('fullName', 'Anh Le')

// console.log(profileSetting.get('fullName'))


// profileSetting.set('fullName', 'Anh Le')
// profileSetting.set('age', 21)
// profileSetting.set('address','HCM')

// const profileSetting2 = createStorage('profile_setting_2')

// // profileSetting2.set('fullName', 'Anh Le')

// console.log(profileSetting2.get('fullName'))


// profileSetting2.set('fullName', 'Anh Le')
// profileSetting2.set('age', 22)
// profileSetting2.set('address','HCM')

// const profileSetting3 = createStorage('profile_setting_3')

// // profileSetting3.set('fullName', 'Anh Le')

// console.log(profileSetting3.get('fullName'))


// profileSetting3.set('fullName', 'Anh Le')
// profileSetting3.set('age', 3)
// profileSetting3.set('address','HCM')

//Tính biểu diễn
function createApp() {
    const cars = []

    return {
        add(car) {
            cars.push(car)
        },
        show() {
            console.log(cars)
        }
    }
}

const app = createApp ()

app.show()

app.add('BMW')
app.add('Mercedes')
app.add('Porsche')


app.show()