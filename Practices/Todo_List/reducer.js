import storage from "./util/storage.js"


const init = {
    todos: storage.get(),
    filter: 'all',
    filters: {
        all: () => true,
        active: todo => !todo.completed,
        completed: todo => todo.completed,
    },
    editIndex: null,
}

const actions = {
    add({ todos },title) {
        if(title) {
            todos.push({ title: title, completed: false })
            storage.set(todos)
        }
    },
    toggle({ todos }, index) {
        const todo = todos[index]
        todo.completed = !todo.completed
        storage.set(todos)
    },
    //completed: trạng thái checkbox
    toggleAll({ todos }, completed ) {
        todos.forEach(todo => todo.completed = completed) 
        storage.set(todos)
    },
    destroy({ todos }, index) {
        todos.splice(index, 1)
        storage.set(todos)
    },
    switchFilter(state, filter) {
        state.filter = filter
    },
    clearCompleted(state) {
        //state = init
        state.todos = state.todos.filter(state.filters.active)
        storage.set(state.todos)
    },
    startEdit(state, index) {
        state.editIndex = index
    },
    endEdit(state, title) {
        // console.log(state.editIndex) 
        if(state.editIndex !== null) {
            // console.log(state.todos[state.editIndex].title, title )
            if(title) {
                state.todos[state.editIndex].title = title     
                storage.set(state.todos)

            } else {
                this.destroy(state, state.editIndex)
            }

            state.editIndex = null; 
        }
    },
    exit(state) {
        state.editIndex = null;
    }
}

export  default function reducer (state = init, action, args) {
    // switch (action) {
    //     case 'add':
    //         // console.log(args)
    //         const [title] = args
    //         // console.log(title)
    //         return {
    //             ...state,
    //             todos: [...state.todos, {
    //                 title,
    //                 completed: false,
    //             }]
    //         }
    //     default:
    //         return state
    // }
    actions[action] && actions[action](state, ...args)
    return state
}
