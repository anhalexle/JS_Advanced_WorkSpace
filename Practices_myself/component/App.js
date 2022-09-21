import html from '../core.js';
//lấy giá trị từ store thì cần tạo ra connect

import { connect } from '../store.js'

// import $ from '../script.js'

// const connector = connect(state => ({
//     cars: state.cars
// }))
//tùy chỉnh

const connector = connect()

// console.log(connector(App))
//destructuring
function App({ cars }) {
    //khi lấy được từ connector là cái object từ return (Object.assign)
    // console.log(props)
    // console.log(cars)
    // console.log(cars) //này sẽ trả 1 mảng chứa các phần tử trong init
    return html `
        <ul>
            ${cars.map((car, index) => `<li>
                                            ${car}
                                            <span class ="delete" data-index="${index}" >&times</span>
                                        </li>
                                        `)}
        </ul>
        <button onclick="dispatch('ADD', 'Porsche')">Add car</button>
    `
}


export default connector(App)