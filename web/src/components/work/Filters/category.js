import React, { useState } from 'react'
import { FilterButton } from './styles';

//TODO: If selected, change query in search, change query string
//TODO: If de-selected, change query in search, change query string
//TODO: If query string it's empty, set View All true

const CategoryButton = ({ children, viewAll, setViewAll }) => {
  const [selected, setSelected] = useState(false);

  const filterProjects = () => {
    setViewAll(false)
    setSelected(!selected)
  }


  return (
    <FilterButton
      className={selected && !viewAll ? 'selected' : ''}
      onClick={filterProjects}
    >
      {children}
    </FilterButton>
  )
}

export default CategoryButton
