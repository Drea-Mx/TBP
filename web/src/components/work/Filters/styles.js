import styled from 'styled-components'

export const FiltersContainer = styled.div`
  padding: 5.875rem 2.5rem 1.5rem;
  background-color: #000;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;

  @media screen and (max-width: 820px){
    justify-content: flex-start;
  }
`

export const FilterButton = styled.button`
  padding: 0.25rem 0.75rem;
  font-size: 0.75rem;
  color: #fff;
  text-transform: uppercase;
  transition: background-color 0.25s ease;
  border-radius: 3.125rem;
  cursor: pointer;

  &.selected {
    background-color: #1A43F5;
  }

  &:hover {
    background-color: #1A43F5;
  }
`