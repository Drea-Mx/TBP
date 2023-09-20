import React from 'react'
import { FilterButton } from './styles';

const CategoryButton = ({ unFilter, setIsFirst, title, category, categories, setCategories, projects, setProjects, filteredProjects }) => {
  const isSelected = categories.includes(category)
  const handleButton = () => {
    if(isSelected && categories.length === 1) {
      unFilter()
    }
    if (isSelected) {
      setCategories(categories.filter(c => c !== category))
      // setProjects(filteredProjects.filter(project => project.node._rawCategory[0].value !== category))
    } else {
      // const newFilteredProjects = projects.filter(project => project.node._rawCategory[0].value === category)
      // setProjects([...filteredProjects, newFilteredProjects])
      setCategories([...categories, category], setIsFirst(false))
    }
  }

  return (
    <FilterButton
      className={isSelected ? 'selected' : ''}
      onClick={handleButton}
    >
      {title}
    </FilterButton>
  )
}

export default CategoryButton
