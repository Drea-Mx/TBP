import styled from 'styled-components'

export const Container = styled.section`
  height: 100vh;
  min-height: 40rem;
  display: flex;
  color: var(--white);
  background-color: var(--black);

  @media (max-width: 1024px) {
    height: auto;
    min-height: unset;
    flex-direction: column;
  }
`

export const Texts = styled.div`
  width: auto;
  padding: 6rem 3rem 6rem 4rem;
  font-size: clamp(1.25rem, 1.75vw, 1.875rem);
  line-height: 1.4;
  display: flex;
  flex-direction: column;

  img {
    max-width: 26rem;
    width: 75%;
    height: auto;
    margin: 0 0 2.5rem;
    filter: invert(100%);
  }

  .separator {
    width: 1.5rem;
    height: 5px;
    margin: 2.5rem 0 0;
    background-color: var(--blue);
  }

  @media (max-width: 1024px) {
    height: auto;
    padding: 4rem 2rem 2rem;
  }

  @media (max-width: 680px) {
    img {
      width: 85%;
      margin: 0 0 1.5rem;
    }

    .separator {
      margin: 2rem 0;
    }
  }
`

export const Cta = styled.div`
  margin: auto 0 0;
  font-size: clamp(2rem, 2.31vw, 2.5rem);

  p {
    line-height: 1;
  }

  em {
    color: var(--blue);
  }

  a {
    display: block;
    width: fit-content;
    margin: 1.5rem 0 0;
    padding: 0.5rem 1.5rem;
    color: var(--white);
    background-color: var(--blue);
    border-radius: 6px;
    font-size: clamp(1.25rem, 1.38vw, 1.5rem);
  }

  @media screen and (max-width: 1024px) {
    margin: 0;
  }
`

export const Video = styled.div`
  width: auto;
  height: 100%;
  aspect-ratio: 1/1;
  position: relative;

  .video {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    overflow: hidden;

    iframe {
      height: 60vw !important;
      object-fit: cover;
      transform: scale(1.75);
    }
  }

  @media screen and (max-width: 1024px) {
    .video iframe {
      height: 100vw !important;
      transform: scale(1.5);
    }
  }
`

export const AboutLanding = styled.section`
  padding: 7.5rem 2rem 4.5rem;
  font-size: clamp(1.25rem, 1.75vw, 1.875rem);
  text-align: center;
  line-height: 1.2;
  color: var(--white);
  background-color: var(--blue);

  p {
    max-width: 62rem;
    margin: 0 auto;
  }

  svg {
    display: block;
    margin: 4rem auto 0;
  }

  @media (max-width: 680px) {
    padding: 4rem 2rem;
  }
`