import styled from "styled-components"

export const Container = styled.section`
  padding: 3rem 3.125rem;
  color: var(--white);
  background-color: var(--blue);
  position: relative;

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

  .success {
    padding: 1.5rem 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--blue);
    text-align: center;
    font-size: clamp(1.5rem, 2.55vw, 2.75rem);
    opacity: 0;
    pointer-events: none;
    transition: opacity 150ms ease;

    &.submitted {
      opacity: 1;
      pointer-events: all;
    }

    .thanks {
      font-family: var(--plain);
      font-size: 1.25rem;
    }

    button {
      width: 1.75rem;
      height: 1.75rem;
      margin-top: 2rem;

      img {
        display: block;
      }
    }
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

    &:disabled {
      opacity: 0.8;
      cursor: auto;
    }
  }

  select option {
    color: #000;
  }

  .cap-button {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }

  @media screen and (max-width: 480px) {
    button {
      margin: 0 auto;
    }
  }
`