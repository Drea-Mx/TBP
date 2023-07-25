import React, { useState } from 'react'
import { Link } from 'gatsby'
import { FiltersContainer, FilterButton } from './styles'
import CategoryButton from './category'

const Filters = ({ categories, language, projects, setProjects }) => {
  const [filteredCategories, setCategories] = useState(null)
  const viewAll = filteredCategories === null

  const unFilter = () => {
    setProjects(projects, setCategories(null))
  }

  return (
    <FiltersContainer>
      <FilterButton
        onClick={unFilter}
        className={viewAll ? 'selected' : ''}
      >
        {language === 'es' ? 'Ver todo' : 'View All'}
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
