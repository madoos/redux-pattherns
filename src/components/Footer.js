import React from 'react'
import FilterLink from './FilterLink'
import { FILTERS } from '../constants'

const Footer = ({ filter, onFilterChange }) => {
  return (
    <p>
      Show:{' '}
      <FilterLink name="All"
        isActive={filter === FILTERS.SHOW_ALL}
        onClick={() => onFilterChange(FILTERS.SHOW_ALL)}
      />
      {', '}
      <FilterLink
        name="Completed"
        isActive={filter === FILTERS.SHOW_COMPLETED}
        onClick={() => onFilterChange(FILTERS.SHOW_COMPLETED)}
      />
      {', '}
      <FilterLink
        name="Active"
        isActive={filter === FILTERS.SHOW_ACTIVE}
        onClick={() => onFilterChange(FILTERS.SHOW_ACTIVE)}
      />
    </p>
  );
}

export default Footer