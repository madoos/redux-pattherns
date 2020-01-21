import { curry, pipeP, assoc, tap, propEq, findIndex, merge } from 'ramda'
import { v4 as uuid } from 'node-uuid'
import { TODO } from '../constants'

const delay = curry((t, data) => new Promise((resolve) => {
    setTimeout(() => resolve(data), t)
}))

const Todo = (text) => assoc('text', text, { id: uuid(), completed: false })

const TODOS = [
    Todo('Lear Redux'), 
    Todo('Use redux Observable')
]

// addTodo :: String -> Promise { text, id, complete }
const createTodo = pipeP(
    delay(750),
    Todo,
    tap(todo => TODOS.push(todo))
)

// getTodos :: () -> Promise [Todo]
const getTodos = () => delay(750, TODOS)

// updateTodo :: Obj -> Todo
const updateTodo = pipeP(
    delay(750),
    (data) => {
        const {id} = data
        const idx = findIndex(propEq('id', id), TODOS)
        TODOS[idx] = merge(TODO[idx], data)
        return TODOS[idx]
    })

export default {
    createTodo,
    getTodos,
    updateTodo
}