import { TODO } from "../constants"
import api from '../api'
import { evolve, not } from "ramda"

export const addTodo = (text) => (dispatch) => {
    return api.createTodo(text)
            .then(todo => ({ type: TODO.ADD_TODO, payload: todo}))
            .then(dispatch)
}

export const toggleTodo = (todo) => (dispatch) => {
    const updated = evolve({ completed: not }, todo)
    return api.updateTodo(updated).then((updatedTodo) => ({
        type: TODO.TOGGLE_TODO,
        payload: updatedTodo
    })).then(dispatch)
}

export const listTodos = (dispatch) => api.getTodos().then((todos) => ({ type: TODO.LIST_TODOS, payload: todos })).then(dispatch)
