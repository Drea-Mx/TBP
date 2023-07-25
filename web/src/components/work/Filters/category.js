import React from 'react'
import { FilterButton } from './styles';

const CategoryButton = ({ title, category, categories, setCategories, unFilter, projects, setProjects }) => {
  const handleButton = () => {
    const isSelected = categories === category

    if (isSelected) {
      unFilter()
    } else {
      const filteredProjects = projects.filter(project => project.node._rawCategory[0].value === category)
      setProjects(filteredProjects)
      setCategories(category)
    }
  }

  return (
    <FilterButton
      className={categories === category ? 'selected' : ''}
      onClick={handleButton}
    >
      {title}
    </FilterButton>
  )
}

export default CategoryButton
