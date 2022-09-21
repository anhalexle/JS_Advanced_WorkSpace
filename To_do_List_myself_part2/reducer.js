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
    add({ todos }, title) {
        
        // console.log(title)
        if(title) {
            todos.push({ title: title, completed: false});
            storage.set(todos);
        }
    },
    toggle({ todos }, index) {
        const todo = todos[index];
        todo.completed = !todo.completed;
        storage.set(todos)
    },
    toggleAll({ todos }, completed) {
        todos.forEach(todo => todo.completed = completed);
        storage.set(todos);
    },
    destroy({ todos }, index) {
        todos.splice(index, 1);
        storage.set(todos);
    },
    clearCompleted(state) {
        state.todos = state.todos.filter(state.filters.active);
        storage.set(state.todos);
    },
    switchFilter(state, type) {
        state.filter = type;
    },
    startEdit(state, index) {
        state.editIndex = index;
    },
    endEdit(state, title) {
        if(title) {
            state.todos[state.editIndex].title = title;
            storage.set(state.todos);
        } else {
            this.destroy(state, state.editIndex);
        }
        state.editIndex = null;
    },
    cancelEdit(state) {
        state.editIndex = null;
    }
}

export default function reducer(state = init, action, args) {
    // console.log(...args)
    actions[action] && actions[action](state, ...args);
    return state;
}