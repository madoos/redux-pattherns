import { connect } from 'react-redux'
import AddTodo from '../components/AddTodo'
import { addTodo } from '../actions/todos'
import { compose, always, pipe } from 'ramda'

const enhance = compose(
    connect(
        always({}),
        (dispatch) => ({ onAddClick: pipe(addTodo, dispatch) })
    )
)

export default enhance(AddTodo)
