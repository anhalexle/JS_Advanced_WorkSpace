const TODO_STORAGE_KEY_PART2 = 'TODO_PART2'

export default {
    get() {
        return JSON.parse(localStorage.getItem(TODO_STORAGE_KEY_PART2)) || [];
    },
    set(value) {
        localStorage.setItem(TODO_STORAGE_KEY_PART2, JSON.stringify(value));
    }
}