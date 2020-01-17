import { connect } from 'react-redux'
import { compose, pipe, pick, prop, evolve, curry, propEq, filter } from 'ramda'
import TodoList from '../components/TodoList'
import { toggleTodo } from '../actions/todos'
import { mapProps } from 'recompose'

import {FILTERS} from '../constants'

const filerTodos = curry((visibilityFilter, todos) => {
    switch(visibilityFilter){
        case FILTERS.SHOW_COMPLETED:
            return filter(prop('completed'), todos)
        case FILTERS.SHOW_ACTIVE:
            return filter(propEq('completed', false), todos)
        default:
            return todos
    }
})

const enhance = compose(
    connect(
        pick(['todos', 'visibilityFilter']),
        (dispatch) => ({ onTodoClick: pipe(toggleTodo, dispatch) }) 
    ),
    mapProps((props) => {
        const { visibilityFilter } = props
        return evolve({ todos: filerTodos(visibilityFilter)}, props) 
    })
)

export default enhance(TodoList)