
import { ofType } from 'redux-observable'
import { pipe, evolve, not, prop } from 'ramda'
import { TODO } from '../constants'
import { flatMap, map } from 'rxjs/operators'
import { from } from 'rxjs'
import api from '../api'
import { successTodos, toggleTodoSuccess, addTodoSuccess } from '../actions/todos'

export const fetchTodos = pipe(
    ofType(TODO.FETCHING_TODOS),
    flatMap(() => from(api.getTodos())),
    map(successTodos)
)

export const toggleTodo =  pipe(
    ofType(TODO.TOGGLE_TODO),
    map(prop('payload')),
    map(evolve({ completed: not })),
    flatMap((todo) => from(api.updateTodo(todo))),
    map(toggleTodoSuccess)
)

export const addTodo = pipe(
    ofType(TODO.ADD_TODO),
    map(prop('payload')),
    flatMap((text) => api.createTodo(text)),
    map(addTodoSuccess)
)