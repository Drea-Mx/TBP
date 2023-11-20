import React, { useState } from "react"
import styled from "styled-components"
import Lottie from "lottie-react";
import BlockContent from "@sanity/block-content-to-react";
import processIcon from "../../assets/lotties/processIcon.json"
import researchIcon from "../../assets/lotties/researchIcon.json"
import strategyIcon from "../../assets/lotties/strategyIcon.json"
import designIcon from "../../assets/lotties/designIcon.json"
import applicationIcon from "../../assets/lotties/applicationIcon.json"
import { localize } from "../../utils/helpers";

const Process = ({ data, language }) => {
  const heading = localize(data._rawOurProcessTitle, [language])
  const steps = localize(data._rawOurProcessSteps, [language])
  const [active, setActive] = useState(0)

  const getAnimation = (index) => {
    switch (index) {
      case 1:
        return researchIcon
      case 2:
        return strategyIcon
      case 3:
        return designIcon
      case 4:
        return applicationIcon
      default:
        return processIcon
    }
  }

  return (
    <StyledProcess>
      <div className="heading">
        <BlockContent blocks={heading} />
      </div>
      <div className="flexCont">
        <div className="animations">
          <Lottie animationData={getAnimation(active)} loop={true} />
        </div>
        <div className="steps">
          {steps?.map(({ title, description }, index) => (
            <div
              className="step"
              key={`process-step-${index}`}
              onMouseEnter={() => setActive(index + 1)}
              onMouseLeave={() => setActive(0)}
            >
              <div className="eyebrow">0{index + 1}</div>
              <div className="info">
                <BlockContent blocks={title} />
                <BlockContent blocks={description} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={`modal ${active !== 0 ? 'open' : ''}`}>
        <div className="close" onClick={() => setActive(0)}>
          <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="2.70711" y1="1.29289" x2="22.7071" y2="21.2929" stroke="#014FFE" stroke-width="2"/>
            <line y1="-1" x2="28.2843" y2="-1" transform="matrix(-0.707107 0.707107 0.707107 0.707107 22 2)" stroke="#014FFE" stroke-width="2"/>
          </svg>
        </div>
        <div className="animations">
          <Lottie animationData={getAnimation(active)} loop={true} />
        </div>
        <div className="eyebrow">0{active}</div>
        <div className="info">
          {console.log('steps', steps)}
          <BlockContent blocks={steps[active - 1]?.title} />
          <BlockContent blocks={steps[active - 1]?.description} />
        </div>
      </div>
    </StyledProcess>
  )
}

const StyledProcess = styled.div`
  width: 100%;
  height: auto;
  padding: 6rem 3.5rem;
  position: relative;
  background-color: var(--black);

  .modal {
    display: none;
  }

  .heading {
    background-color: var(--black);
    color: var(--white);
    text-align: center;
    margin-bottom: 4rem;
    p {
      font-size: 1.4rem;
      @media (max-width: 680px) {
          font-size: 6vw;
      }
    }

    em {
        color: var(--blue);
    }
  }

  .flexCont {
    display: flex;
    justify-content: space-between;
    gap: clamp(1rem, 6vw, 6rem);
  }

  .animations {
    width: 21rem;
    height: 17.5rem;
    padding-left: 3.5rem;
    aspect-ratio: 1 / 1;
  }

  .steps {
    width: 100%;
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }

  .step {
    color: var(--white);
  }

  .eyebrow {
    font-family: var(--serif);
    font-style: italic;
    color: var(--blue);
    font-size: 1rem;
    font-style: italic;
    margin-bottom: 0.75rem;
  }

  .info {
    display: flex;
    gap: 1rem;
    p:first-child {
      width: 12.5rem;
      font-size: 2.6vw;
      line-height: 2.4375rem;
    }
    p:last-child {
      max-width: 14.5rem;
      color: #6D6E71;
      font-size: 1rem;
      line-height: normal;
    }
  }

  @media screen and (max-width: 1120px) {
    .flexCont {
      flex-direction: column;
      align-items: center;
      gap: 2rem;
    }
  }

  @media screen and (max-width: 860px) {
    .steps {
      width: 65%;
      margin: 0 auto;
      grid-template-columns: repeat(1, 1fr);
      grid-template-rows: repeat(1, 1fr);
    }

    .info {
      p:first-child {
        width: 12.5rem;
        font-size: 2.5rem;
        line-height: 1.15;
      }
      p:last-child {
        max-width: 14.5rem;
        color: #6D6E71;
        font-size: 1rem;
        line-height: normal;
      }
    }
  }

  @media screen and (max-width: 680px) {
    padding: 6rem 2.5rem;

    .animations {
      padding: 0;
      height: auto;
      width: 12rem;
      aspect-ratio: 1 / 1;
    }

    .steps {
      width: 100%;
      margin: 0 auto;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(2, 1fr);
      gap: 1.5rem;
    }

    .info {
      p:first-child {
        width: auto;
        font-size: 7.4vw;
      }
      p:last-child {
        display: none;
      }
    }

    .modal {
      z-index: 1;
      display: block;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      opacity: 0;
      pointer-events: none;
      background-color: var(--black);
      color: var(--white);
      padding: 6rem;

      .close {
        display: flex;
        justify-content: flex-end;
        margin-bottom: 2rem;
      }

      .animations {
        width: 100%;
        height: auto;
        aspect-ratio: 1 / 1;
        margin-bottom: 2rem;
      }
    }

    .open {
      opacity: 1;
      pointer-events: auto;

      .info {
        flex-direction: column;
        p:last-child {
          display: block;
          color: #6D6E71;
        }
      }
    }
  }
`

export default Process
