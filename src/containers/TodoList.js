import { connect } from 'react-redux'
import { compose, pipe, pick, prop, evolve, curry, propEq, filter, cond, T, values } from 'ramda'
import TodoList from '../components/TodoList'
import { toggleTodo } from '../actions/todos'
import { mapProps } from 'recompose'

import {FILTERS} from '../constants'

const filerTodos = curry((visibilityFilter, todos) => {
    return filter(cond([
        [() => visibilityFilter === FILTERS.SHOW_COMPLETED, prop('completed')],
        [() => visibilityFilter === FILTERS.SHOW_ACTIVE, propEq('completed', false)],
        [T, T]
    ]), todos)
})

const enhance = compose(
    connect(
        pick(['todos', 'visibilityFilter']),
        (dispatch) => ({ onTodoClick: pipe(toggleTodo, dispatch) }) 
    ),
    mapProps((props) => {
        const { visibilityFilter } = props
        return evolve({ todos: pipe(values, filerTodos(visibilityFilter))}, props) 
    })
)

export default enhance(TodoList)