import { TODO } from "../constants"

export const addTodo = (text) => ({ 
    type: TODO.ADD_TODO, 
    payload: text
})

export const addTodoSuccess = (todo) => ({ 
    type: TODO.ADD_TODO_SUCCESS, 
    payload: todo
})

export const toggleTodo = (todo) => ({
    type: TODO.TOGGLE_TODO,
    payload: todo
})

export const fetchTodos = () => ({
    type: TODO.FETCHING_TODOS,
    payload: {}
})

export const successTodos = (todos) => ({
    type: TODO.SUCCESS_TODOS,
    payload: todos
})

export const toggleTodoSuccess = (todo) => ({
    type: TODO.TOGGLE_TODO_SUCCESS,
    payload: todo
})