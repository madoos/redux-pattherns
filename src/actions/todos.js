import { TODO } from "../constants";

export const addTodo = (text) => ({
    type: TODO.ADD_TODO,
    payload: {
        text,
        completed: false
    }
})

export const toggleTodo = (id) => ({
    type: TODO.TOGGLE_TODO,
    payload: { id }

})