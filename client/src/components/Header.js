import React from 'react'
import FilterLink from './FilterLink'
import { VisibilityFilters } from '../actions'

const Header = () => (
    <div className="ui raised very padded text container segment"> 
    <span>Show: </span>
    <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>Completed</FilterLink>
  </div>
)

export default Header