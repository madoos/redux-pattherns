import { FILTERS } from '../constants'
import { path } from 'ramda'

const getFilter = path(['payload', 'filter'])

const handleVisibilityFilter = (visibilityFilter = FILTERS.SHOW_ALL, action) => {
    switch (action.type) {
      case FILTERS.CHANGE_VISIBILITY_FILTER:
        return getFilter(action)
      default:
        return visibilityFilter
    }
  }

export default handleVisibilityFilter