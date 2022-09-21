import html from "../core.js";

import { connect } from "../store.js";

import ToDoItem from "./ToDoItem.js";

const connector = connect()

function ToDoList ({ todos, filter, filters }) {
    // console.log(filters)
    // console.log(props)
    // console.log(todos)
    return html`
            <section class="main">
            <input
                id="toggle-all"
                class="toggle-all"
                type="checkbox"
                onchange = "dispatch('toggleAll', this.checked)"
                ${todos.every(filters.completed) && "checked"}
            >
            <label for="toggle-all">Mark all as complete</label>
            <ul class="todo-list">
                ${todos
                    .filter(filters[filter])
                    .map((todo, index) => ToDoItem({ todo, index }))}
            </ul>
        </section>
    `
}

export default connector(ToDoList)