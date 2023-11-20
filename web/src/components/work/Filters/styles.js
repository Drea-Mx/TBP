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

  @media screen and (max-width: 680px) {
    display: none;
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

  &.xl {
    padding: 0.25rem 1.5rem;
  }

  &:hover {
    background-color: #1A43F5;
  }

  /* @media screen and (max-width: 780px){
    border: 1px solid var(--blue);
  } */

  @media screen and (max-width: 680px){
    width: fit-content;
  }
`

export const FiltersMobile = styled.div`
  display: none;

  @media screen and (max-width: 680px) {
    display: block;
    padding: 6.5rem 2.5rem 1.5rem;
    background-color: #000;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export const FiltersDrawer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 5rem;
  background-color: var(--black);
  z-index: 10;
  padding: 2rem;
  transform: translateX(100%);
  transition: transform 350ms;

  &.open {
    transform: translateX(0);
  }

  .close {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-bottom: 2rem;
  }

  .container {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    align-items: center;
  }
`