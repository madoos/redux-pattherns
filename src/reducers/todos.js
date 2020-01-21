import { TODO } from '../constants'
import { normalizeTodos } from '../schema'

const initialState = { /* [id]: Todo */}

const upsertTodo = (todos, todo) => ({ ...todos, [todo.id]: todo})

const todos = (state = initialState, action) => {
    switch(action.type){
        case TODO.LIST_TODOS:
        case TODO.SUCCESS_TODOS:
            return normalizeTodos(action.payload)
        case TODO.ADD_TODO_SUCCESS:
            return upsertTodo(state, action.payload)
        case TODO.TOGGLE_TODO_SUCCESS:
            return upsertTodo(state, action.payload)
        default:
            return state
    }
}

export default todos