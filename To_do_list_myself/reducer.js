import storage from "./util/storage.js";


const init = {
    todos: storage.get(),
    filter: 'all',
    filters: {
        all: () => true,
        active: todo => !todo.completed,
        completed: todo => todo.completed,
    },
    editIndex: null,
};

const actions = {
    add({ todos }, title) {
        if(title) {
            todos.push({ title, completed: false});
            storage.set(todos);
        }     
    },
    toggle({todos}, index) {
        const todo = todos[index];
        todo.completed = !todo.completed;
        storage.set(todos);
    },
    delete({todos}, index) {
        todos.splice(index, 1);
        storage.set(todos);
    },
    toggleAll({todos}, completed) {
        todos.forEach(todo => todo.completed = completed);
        storage.set(todos);
    },
    switchFilter(state, filter) {
        state.filter = filter;
    },
    clearCompleted(state) {
        state.todos = state.todos.filter(state.filters.active);
        storage.set(state.todos);
    },
    startEdit(state, index) {
        state.editIndex = index;
    },
    changeTitleToDo(state, title) {
        if(state.editIndex !== null) {
            if(title) {
                state.todos[state.editIndex].title = title;
                storage.set(state.todos);
            }
            else {
                this.delete(state, state.editIndex);
            }
            state.editIndex = null;
        }   
    },
    cancelEdit(state) {
        state.editIndex = null;
    } 
};

export default function reducer(state = init, action, args) {
    actions[action] && actions[action](state, ...args);
    return state;
    // console.log(args)
    // console.log(args)
    //...state là rest của 1 object nên sẽ trả về toàn bộ 1 object chứa toàn bộ key và object còn lại
    // const {...todos} =init
    //trả về như vầy
    // console.log(todos)
    // {
    //    todos: [
    //     {
    //         title: 'Learn Javascript',
    //         completed: false,
    //     },
    //     {
    //         title: 'Learn Javascript Advanced',
    //         completed: true,
    //     }
    //  ]
    // }
    // console.log(todos.todos)
    // dùng todos.todos thì nó trả vềtrả về 1 array chứa 2 object con bên trong
    // [
    //     {
    //         title: 'Learn Javascript',
    //         completed: false,
    //     },
    //     {
    //         title: 'Learn Javascript Advanced',
    //         completed: true,
    //     }
    // ]
    //dùng toán tử spread để phá dấu ngoặc vuông trong mảng chỉ trả về các object
    // console.log(...todos.todos) //trả về 1 mảng chứa các object
    //     {
    //         title: 'Learn Javascript',
    //         completed: false,
    //     },
    //     {
    //         title: 'Learn Javascript Advanced',
    //         completed: true,
    //     }
    // switch(action) {
    //     case 'add': {
    //         const [newToDo] = args;
    //         // console.log(newToDo);
    //         return {
    //             //dùng rest trả về 1 object chứa các key và value
    //             ...state,
    //             //dùng spread để dấu ngoặc vuông của toán tử rest phía trên để nó trả về các object con trong mảng
    //             todos: [...state.todos, {
    //                 title: newToDo,
    //                 completed: false,
    //             }]
    //         }
    //     }
    //     default:
    //         return state
    // }
}