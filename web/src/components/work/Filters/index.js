import React, { useState } from 'react'
import { FiltersContainer, FilterButton } from './styles'
import CategoryButton from './category'

const Filters = ({ setIsFirst, categories, language, projects, setProjects, filteredProjects, filteredCategories, setCategories }) => {
  const viewAll = filteredCategories.length === 0

  const viewAllText = language === 'es' ? 'Ver todo' : 'View All'
  const removeFiltersText = language === 'es' ? 'Quitar filtros' : 'Remove Filters'

  const unFilter = () => {
    setCategories([])
    setIsFirst(true)
  }

  return (
    <FiltersContainer>
      <FilterButton
        onClick={unFilter}
        className={viewAll ? 'selected' : ''}
      >
        {viewAll ? viewAllText : removeFiltersText}
      </FilterButton>
      {categories?.map(({ title, _key, value }) => (
        <CategoryButton
          setIsFirst={setIsFirst}
          unFilter={unFilter}
          key={_key || value}
          categories={filteredCategories}
          setCategories={setCategories}
          title={title.translate}
          category={value}
          projects={projects}
          setProjects={setProjects}
          filteredProjects={filteredProjects}
        />
      ))}
    </FiltersContainer>
  )
}

export default Filters
