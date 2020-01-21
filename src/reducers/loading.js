import { TODO } from '../constants'

const initialState = true

const loading = (state = initialState, action) => {
    switch(action.type){
        case TODO.FETCHING_TODOS:
        case TODO.TOGGLE_TODO:
        case TODO.ADD_TODO:
            return true
        case TODO.SUCCESS_TODOS:
        case TODO.TOGGLE_TODO_SUCCESS:
        case TODO.ADD_TODO_SUCCESS:
            return false
        default:
            return state
    }
}

export default loading