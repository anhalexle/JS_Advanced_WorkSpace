// import html from "./core.js"

// const cars= ['BMW', 'Porsche', 'Mercedes']
 
// const output = html`
//     <h1>${true}</h1>
//     <ul>
//         ${cars.map(car => `<li>${car}</li>`)}
//     </ul>
// `

// console.log(output)

// var test = new Map ()

// test['name'] = 'Anh Le'
// test['add'] = () => console.log('hehe')
// // console.log(test.add())

// // for (const [key, value] of test) {
// //     console.log(key)
// // }
// // var myName = 'name'
// // console.log(test[myName])

// // var {name} = test
// // console.log(name)
//Hiểu hơn về map là 1 list các array chứa trong array nhưng khi call ra lại là object với mỗi key, value là từng phần tử trong mảng
// const fruits = new Map([
//     ["apples", 500],
//     ["bananas", 300],
//     ["oranges", 200]
//   ]);

// for (const [key, value] of fruits) {
//     console.log(key, value);
// }

// const fruits = new Map ()
// fruits.set("apples", 500);
// fruits.set("bananas", 300);
// fruits.set("oranges", 200);


// console.log(fruits)

import { attach } from "./store.js";
import App from "./component/App.js"
// console.log(App)
attach(App, document.getElementById('root'))

// const $ = document.querySelector.bind(document)

// export default $