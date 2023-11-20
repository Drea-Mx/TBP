import React from "react"
import styled from "styled-components"
import CountUp from "react-countup"

const Counter = ({ data }) => (
  <>
    <StyledCounter className="counter">
      <div>
        <p>{data.projectsTitle.translate}</p>
        <CountUp end={data.projects} prefix="+" delay={1}/>
      </div>
      <div>
        <p>{data.countriesTitle.translate}</p>
        <CountUp end={data.countries} prefix="+" delay={1}/>
      </div>
      <div>
        <p>{data.sinceTitle.translate}</p>
        <CountUp end={data.since} separator="" delay={1}/>
      </div>
    </StyledCounter>
    <TeamPic>
      <img src={data.teamImage.asset.url} alt="The Branding People" style={{ pointerEvents: "none" }} />
    </TeamPic>
  </>
)

const TeamPic = styled.div`
    width: 100%;
    height: auto;
    aspect-ratio: 1534 / 914;
    position: sticky;
    top: 0;
    background-color: var(--black);

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

const StyledCounter = styled.div`
  width: 100%;
  height: 7.5rem;
  background-color: var(--black);
  color: var(--white);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 3.5rem;

  div {
    min-width: 13.75rem;
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;

    p {
      color: var(--blue);
      font-family: var(--serif);
      font-size: 1.5rem;
      margin-right: 1rem;
      margin-bottom: 0.25rem;
    }

    span {
      font-size: 4rem;
      line-height: 1;
    }
  }

  @media screen and (max-width: 680px) {
    padding: 1rem 2rem;

    div {
      flex-direction: column;
      align-items: center;

      p {
        margin: 0 0 0.5rem;
        font-size: 1rem;
      }

      span {
        font-size: 2.5rem;
      }
    }
  }
`

export default Counter
