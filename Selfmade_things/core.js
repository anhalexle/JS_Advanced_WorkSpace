export default function html ([first, ...strings], ...values) {
    return values.reduce(
        (acc, curr) => acc.concat(curr, strings.shift())
    , [first])
    .filter(x => x && x !== true || x === 0)
    .join('')
}

export function createStore(reducer) {
    let state = reducer()
    const myRoot = new Map()
    function render() {
        for(const [root, component] of myRoot) {
            root.innerHTML = component()
        }
    }
    return {
        attach(component, root) {
            myRoot.set(root, component)
            render()
        },
        connect(selector = state => state) {
            return component => (props, ...args) => component(Object.assign({}, props, ...args, selector(state)))
        },
        dispatch(action, ...args) {
            state = reducer(state, action, ...args)
            render()
        }
    }
}