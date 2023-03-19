import styled from "styled-components"

export const Container = styled.section`
  font-size: clamp(1.5rem, 2.55vw, 2.75rem);
  color: var(--white);
  background-color: var(--black);

  .header {
    padding: 1.5rem 2rem;
    text-align: center;
    line-height: 1.2;
  }

  .footer {
    padding: 1.5rem 2rem;
    text-align: center;
    background-color: var(--blue);

    a {
      width: fit-content;
      display: block;
      margin: 0 auto;
      padding: 0.5rem 1.5rem;
      font-size: clamp(1.25rem, 1.38vw, 1.5rem);
      color: var(--white);
      background-color: var(--black);
      border-radius: 6px;
    }

    p {
      width: fit-content;
      display: inline-block;
    }
  }
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  .box {
    aspect-ratio: 1/1;
    cursor: pointer;
  }

  @media (max-width: 680px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 440px) {
    grid-template-columns: repeat(1, 1fr);
  }
`