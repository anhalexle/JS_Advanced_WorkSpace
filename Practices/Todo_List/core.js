export default function html ([first, ...strings], ...values) {
    return values.reduce(
        (acc, cur) => acc.concat(cur, strings.shift()), 
        [first]
    )
    .filter(x => x && x !== true || x === 0  )
    .join('')
}

export function createStore(reducer) {
    let state = reducer()
    const roots = new Map()

    function render () {
        //[root, component] đistructuring
        for (const [root, component] of roots) {
            const output = component() //function
            root.innerHTML = output
        }
    }

    return {
        attach(component, root) {
            //key là root, value sẽ là component
            roots.set(root, component)
            render()
        },
        //Đẩy dữ liệu từ store ngược về view
        connect(selector = state => state) {
            return component => (props, ...args) => 
                component(Object.assign({}, props, selector(state), ...args))
            // return function (component) {
            //     return function (props, ...args) {
            //         component(Object.assign({}, props, state, ...args))
            //     }
            // }
        },
        dispatch(action, ...args) {
            //Việc làm như vậy khi truyền chỉ cần truyền action và args
            state = reducer(state, action, args)
            render()
        }
    }
}