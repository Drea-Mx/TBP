import styled from "styled-components"

export const Container = styled.section`
  padding: 6rem 0;
  color: var(--white);
  background-color: var(--black);
  overflow: hidden;
`

export const Row = styled.ul`
  display: flex;
  gap: 2rem;
  animation: marquee 40s linear infinite;

  &:nth-child(even) {
    transform: translateX(-600%);
    animation: marqueeRight 40s linear infinite;
  }

  &:not(:last-child) {
    margin: 0 0 1rem;
  }

  li {
    white-space: nowrap;
    flex-basis: auto;
    font-size: clamp(2rem, 4.5vw, 5rem);
  }

  li:nth-child(even) {
    font-family: var(--serif) !important;
    font-style: italic;
    color: var(--blue);
  }

  @media (max-width: 680px) {
    gap: 1rem;
    animation: marquee 18s linear infinite;

    &:nth-child(even) {
      animation: marqueeRight 18s linear infinite;
    }
  }

  @keyframes marquee {
    0% { transform: translateX(0) }
    100% { transform: translateX(-600%) }
  }

  @keyframes marqueeRight {
    0% { transform: translateX(-600%) }
    100% { transform: translateX(0) }
  }
`