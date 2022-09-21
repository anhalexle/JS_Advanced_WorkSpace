import html from '../core.js'
import ToDoItem from './ToDoItem.js'
import { connect } from '../store.js'

// const connector = connect()

function ToDoList({ todos, filter, filters }) {
    // console.log(filters) //nhận được hàm filter chưa
    // console.log(props) //nhận được cái const init của reducer
    
    return html`
        <section class="main">
            <input 
                id="toggle-all" 
                class="toggle-all" 
                type="checkbox"
                onchange= "dispatch('toggleAll', this.checked)" 
                ${ todos.every(filters.completed) && 'checked' }
            >
            <label for="toggle-all">Mark all as complete</label>
            <ul class="todo-list">
                ${todos
                        .filter(filters[filter])
                        .map((todo, index) => 
                            ToDoItem({ todo, index })
                        )
                }
            </ul>
        </section>
    `
}
//C1
// export default connector(ToDoList)
// C2
export default connect()(ToDoList) //trong connector() gọi ra thì trả về function thì ta gọi function được trả về