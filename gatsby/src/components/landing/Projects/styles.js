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
    width: 100%;
    height: auto;
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

export const Modal = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  z-index: 8;
  background-color: rgba(0, 0, 0, 0.7) ;

  .inner {
    width: 90vw;
    height: 90vh;
    max-height: 90vh;
    margin: auto;
    overflow: hidden;
  }

  button {
    z-index: 9;
  }

  .close {
    width: 2rem;
    height: 2rem;
    position: absolute;
    top: 8vh;
    right: 5.5vw;
    z-index: 9;
  }

  .gatsby-image-wrapper {
    height: 100%;
  }

  .slick-slider {
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  .slick-list {
    width: calc(100% - 4rem - 4.625rem);
    height: 100%;
  }

  .slick-arrow {
    width: 2.5rem;
    height: auto;
    cursor: pointer;
  }

  @media screen and (max-width: 1024px) {
    .inner {
      height: fit-content;
    }

    button {
      filter: unset;
    }
  }

  @media screen and (max-width: 640px) {
    .slick-slider {
      flex-wrap: wrap;
    }

    .slick-list {
      width: 100%;
      order: 1;
    }

    .slick-prev {
      order: 2;
    }

    .slick-next {
      order: 3;
      margin: auto;
      margin-right: 0;
    }
  }
`