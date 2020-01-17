import { FILTERS } from '../constants'

export const changeVisibilityFiler = (filter) => ({
    type: FILTERS.CHANGE_VISIBILITY_FILTER,
    payload: { filter }
})