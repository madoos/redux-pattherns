import { connect } from 'react-redux'
import { compose, pipe } from 'ramda'
import { changeVisibilityFiler } from '../actions/visibilityFilter'
import Footer from '../components/Footer'

const enhance = compose(
    connect(
        ({ visibilityFilter }) => ({ filter: visibilityFilter }),
        (dispatch) => ({
          onFilterChange: pipe(changeVisibilityFiler, dispatch)
        })
    )
)

export default enhance(Footer)