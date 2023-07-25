import React, { useState } from 'react'
import { FiltersContainer, FilterButton } from './styles'
import CategoryButton from './category'

const Filters = ({ categories, language, projects, setProjects }) => {
  const [filteredCategories, setCategories] = useState(null)
  const viewAll = filteredCategories === null

  const viewAllText = language === 'es' ? 'Ver todo' : 'View All'
  const removeFiltersText = language === 'es' ? 'Quitar filtros' : 'Remove Filters'

  const unFilter = () => {
    setProjects(projects, setCategories(null))
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
          key={_key}
          unFilter={unFilter}
          categories={filteredCategories}
          setCategories={setCategories}
          title={title.translate}
          category={value}
          projects={projects}
          setProjects={setProjects}
        />
      ))}
    </FiltersContainer>
  )
}

export default Filters
