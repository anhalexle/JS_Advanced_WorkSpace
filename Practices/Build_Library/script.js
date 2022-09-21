// import html from './core.js'


// const $ = document.querySelector.bind(document);

// const cars = ['BMW', 'Porsche', 'Mercedes']
//do dùng map nó trả về mảng nên phải join('') để xóa dấu phẩy

// const isSuccess = false

// const output = html`
//     <h1>${null}</h1>
//     <ul>
//         ${cars.map(car => `<li>${car}</li>`).join('')}
//     </ul>
// `

// console.log(output)

// // $('#app').innerHTML = output


import { attach } from './store.js'

import App from './component/App.js'


//App nhận được object cars là thông qua file store vì khi mình import file store vào là nó gọi tới reducer trong reduce.js lần đầu tiên là nó nhận cái state = init lấy được object car
attach(App , document.getElementById('root'))