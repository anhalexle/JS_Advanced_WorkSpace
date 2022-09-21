import { connect } from '../store.js'
import html from "../core.js"

import Header from './Header.js';
import Footer from './Footer.js';
import ToDoList from './ToDoList.js';

const connector = connect();

function App ({ todos }) {
    return html`
        <section class="todoapp">
            ${Header()}
            ${todos.length > 0 && ToDoList()}
            ${todos.length > 0 && Footer()}
        </section>
    `
}

export default connector(App)