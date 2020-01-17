import { TODO } from '../constants'
import { merge, not, evolve, update } from 'ramda'

let index = 0
const addId = (todo) => merge(todo, { id: index++})

const addTodo = (todos, todo) => todos.concat(addId(todo))

const toggleTodo = (todos, { id }) => {
    const todo =  evolve({ completed: not }, todos[id])
    return update(id, todo, todos)
}

const todos = (todos = [], action) => {
    switch(action.type){
        case TODO.ADD_TODO:
            return addTodo(todos, action.payload)
        case TODO.TOGGLE_TODO:
            return toggleTodo(todos, action.payload)
        default:
            return todos
    }
}

export default todos