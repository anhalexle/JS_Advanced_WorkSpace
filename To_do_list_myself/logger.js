export default function logger (reducer) {
    return (prevState, action, ...args) => {
        console.group(action)
        console.log('Prev state:', prevState)
        console.log('action arguments', args)
        const nextState = reducer(prevState, action, args);
        console.log('next state:', nextState)
        // console.log(nextState)
        console.groupEnd()
        return nextState;
    }
}