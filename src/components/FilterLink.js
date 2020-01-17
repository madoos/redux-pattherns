/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { preventDefault } from '../util'
import { prop, ifElse } from 'ramda'

const Name = ({ name }) => {
    return (<span>{name}</span>)
}
const Link = ({name, onClick }) => {
    return (<a href="#" onClick={preventDefault(onClick)}>{name}</a>)
}

const FilterLink = ifElse(prop('isActive'), Name, Link)

export default FilterLink