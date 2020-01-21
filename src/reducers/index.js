import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import loading from './loading'

const reducer = combineReducers({
  todos,
  visibilityFilter,
  loading
})

export default reducer