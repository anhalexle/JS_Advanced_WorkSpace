import html from '../core.js'
import { connect } from '../store.js'

// const connector = connect(state => ({
//     car : state.cars[0],
//     cars: state.cars
// }))

const connector = connect()


function App ({cars}) {
    // console.log(props)
    // return html`
    //     <ul>
    //         ${cars.map(function (car) {
    //             return `
    //                 <li>${car}</li>
    //             `
    //         })}
    //     </ul>
    // `
    return html`
        <ul>
            ${cars.map(car => `<li>${car}</li>`)}
        </ul>

        <button onclick= "dispatch('ADD', 'Porsche')" >Add Car</button>
    `
}

export default connector(App)