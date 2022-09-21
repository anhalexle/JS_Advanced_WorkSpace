export default function html([first, ...strings], ...values) {
    // console.log(strings)
    // console.log(values)
    return values.reduce(
        (acc, curr) => {
            // console.log(curr)
            // strings.forEach(string => console.log(string))
            // console.log(acc.concat(curr.join('')))
            return acc.concat(curr, strings.shift())
        }
    , [first])
    .filter(x => x && x !== true || x === 0)
    .join('')
}
//curr sẽ lấy ra nguyên 1 cái mảng do dùng template string
// export default function html(...params) {
//    console.log(params)
// }

export function createStore (reducer) {
    //store thì sẽ lưu thằng state để xử lý mỗi khi có yêu cầu từ view
    let state = reducer()
    const roots = new Map()//Map là 1 object đặc biệt
    //roots là 1 object thì mình làm vậy để nó chứa được cả key và value trong object
    function render() {
        for (const [root, component] of roots) {
            // const output = component()
            // root.innerHTML = output
            root.innerHTML = component()//thực thi hàm App
        }
    }
    //component chính là cái function App
    //root sẽ là document.getElementById('root')
    return {
        //lấy view đẩy ra root
        //component là hàm còn root là lấy id từ thẻ div để innerHTML vào
        attach(component, root) {
            roots.set(root, component)//đặt key và value cho object roots
            render()
        },
        //đảy dữ liệu từ store ra view
        //selector là 1 hàm nhận đối số mặc định là state và trả về state luôn
        connect(selector = state => state) {
            //props là dữ liệu muốn truyền vào component sao này
            return component => (props,  ...args) => 
            { 
                //bản chất khi thực hiện việc này chỉ có selector(state) là ta callback lại hàm làm tham số function connect
                const output = component(Object.assign({}, props, selector(state), ...args))
                console.log(output)
                return output
            }
            // return function (component) {
            //     return function (props, ...args) {
            //         return component(Object.assign({}, props, selector(state), ...args))
            //     }
            // }
        },
        //thực hiện hành động
        dispatch(action, ...args) {
            //dựa trên action mà reducer thực hiện sau đó trả về 1 state mới
            state = reducer(state, action, ...args)
            render()
        }
    }
}