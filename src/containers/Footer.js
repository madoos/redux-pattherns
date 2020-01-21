import { connect } from 'react-redux'
import { compose } from 'ramda'
import { changeVisibilityFiler } from '../actions/visibilityFilter'
import Footer from '../components/Footer'

const enhance = compose(
    connect(
        ({ visibilityFilter }) => ({ filter: visibilityFilter }),
        { onFilterChange: changeVisibilityFiler }
    )
)

export default enhance(Footer)