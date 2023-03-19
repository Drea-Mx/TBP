import styled from "styled-components"

export const Container = styled.section`
  padding: 3rem 3.125rem;
  color: var(--white);
  background-color: var(--blue);

  .heading {
    font-size: clamp(1.5rem, 2.55vw, 2.75rem);
    text-align: center;
  }

  .separator {
    width: 1.5rem;
    height: 5px;
    margin: 1rem auto 2rem;
    background-color: var(--black);
  }

  @media screen and (max-width: 480px) {
    padding: 3rem 2rem;
  }
`

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;

  input, select, textarea {
    min-height: 2.5rem;
    flex: 1;
    font-size: 1rem;
    color: var(--white);
    background-color: transparent;
    border: none;
    border-bottom: 1px solid black;
    outline: none;

    &::placeholder {
      color: rgba(255, 255, 255, 0.3);
    }
  }

  textarea {
    height: 2.5rem;
    line-height: 2.5rem;
  }

  textarea, select {
    min-width: 295px;
  }

  button {
    width: fit-content;
    padding: 0.5rem 1.5rem;
    font-size: clamp(1.25rem, 1.38vw, 1.5rem);
    color: var(--white);
    background-color: var(--black);
    border-radius: 6px;
  }

  @media screen and (max-width: 480px) {
    button {
      margin: 0 auto;
    }
  }
`