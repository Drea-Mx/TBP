import React, { useState } from 'react'
import { Link } from 'gatsby'
import { FiltersContainer, FilterButton } from './styles'
import CategoryButton from './category'

const Filters = ({ categories, language }) => {
  const [viewAll, setViewAll] = useState(true)

  return (
    <FiltersContainer>
      <FilterButton
        onClick={() => setViewAll(!viewAll)}
        className={viewAll ? 'selected' : ''}
      >
        {language === 'es' ? 'Ver todo' : 'View All'}
      </FilterButton>
      {categories?.map(({ title, _key }, i) => (
        <CategoryButton
          key={_key}
          viewAll={viewAll}
          setViewAll={setViewAll}
        >
          {title.translate}
        </CategoryButton>
      ))}
    </FiltersContainer>
  )
}

export default Filters
