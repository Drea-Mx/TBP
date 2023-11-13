import React from "react"
import styled from "styled-components"
import CountUp from "react-countup"
import VisibilitySensor from "react-visibility-sensor"

const isSSR = typeof window === "undefined";

const Counter = ({ data }) => (
  <StyledCounter className="counter">
    {!isSSR && (
      <VisibilitySensor partialVisibility offset={{ bottom: 0 }}>
        {({ isVisible }) => (
          <>
            {isVisible ?
              <>
                <div>
                  <p>{data.projectsTitle.translate}</p>
                  <CountUp end={data.projects} prefix="+" />
                </div>
                <div>
                  <p>{data.countriesTitle.translate}</p>
                  <CountUp end={data.countries} prefix="+"/>
                </div>
                <div>
                  <p>{data.sinceTitle.translate}</p>
                  <CountUp end={data.since} separator="" />
                </div>
              </>
            : null}
          </>
        )}
      </VisibilitySensor>
    )}
  </StyledCounter>
)

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
    display: flex;
    align-items: flex-end;

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
