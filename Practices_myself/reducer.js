const init = {
    cars: ['BMW']
}

export default function reducer(state = init, action, ...args) {
    // console.log(action, args)
    switch(action) {
        case 'ADD':
            // init.cars.push(...args)
            const [newCar] = args
            // init.cars.push(newCar)
            // state = init
            //return về cho store xử lý
            return {
                ...state, //state cũ
                cars: [...state.cars, newCar]
            }
        case 'REMOVE':
            const [index] = args;
            state.cars.splice(index, 1)
            return {
                cars: [...state.cars]
            }
        default:
            return state
    }
    
}