import React, { useState } from 'react'
import { FiltersContainer, FilterButton, FiltersMobile, FiltersDrawer } from './styles'
import CategoryButton from './category'

const Filters = ({ setIsFirst, categories, language, projects, setProjects, filteredProjects, filteredCategories, setCategories }) => {
  const viewAll = filteredCategories.length === 0

  const viewAllText = language === 'es' ? 'Ver todo' : 'View All'
  const filtersText = language === 'es' ? 'Filtros' : 'Filters'
  const removeFiltersText = language === 'es' ? 'Quitar filtros' : 'Remove Filters'

  const unFilter = () => {
    setCategories([])
    setIsFirst(true)
  }

  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
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
      <FiltersMobile>
        <FilterButton
          onClick={() => setDrawerOpen(!drawerOpen)}
          className='selected xl'
        >
          {filtersText}
        </FilterButton>
        <FiltersDrawer className={drawerOpen ? 'open' : ''}>
          <div className="close">
            <button onClick={() => setDrawerOpen(!drawerOpen)}>
              <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="1.35355" y1="0.646447" x2="20.3536" y2="19.6464" stroke="white"/>
                <line y1="-0.5" x2="26.8701" y2="-0.5" transform="matrix(-0.707107 0.707107 0.707107 0.707107 20 1)" stroke="white"/>
              </svg>
            </button>
          </div>

          <div className='container'>
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
          </div>
        </FiltersDrawer>
      </FiltersMobile>
    </>
  )
}

export default Filters
