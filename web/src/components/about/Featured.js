import React from "react"
import styled from "styled-components"
import BlockContent from "@sanity/block-content-to-react"
import { localize } from "../../utils/helpers"

const Featured = ({ data, language }) => {
  const title = localize(data._rawFeaturedTitle, [language])
  const featured = localize(data._rawFeatured, [language])

  return (
    <StyledFeatured className="counter">
      <div className="heading">
        <BlockContent blocks={title} />
      </div>
      <div className="marqueeCont">
        <div className="track">
          {featured?.map((item, index) => (
            <div key={`marq-feat-${index}`}>
              {item.year && <span className="year">{item.year}</span>}
              {item.title && <strong className="title">{" "}| {item.title}</strong>}
              {item.location && <em className="year">{" "}- {item.location}</em>}
            </div>
          ))}
          {featured?.map((item, index) => (
            <div key={`marq-feat-${index}`}>
              {item.year && <span className="year">{item.year}</span>}
              {item.title && <strong className="title">{" "}| {item.title}</strong>}
              {item.location && <em className="year">{" "}- {item.location}</em>}
            </div>
          ))}
          {featured?.map((item, index) => (
            <div key={`marq-feat-${index}`}>
              {item.year && <span className="year">{item.year}</span>}
              {item.title && <strong className="title">{" "}| {item.title}</strong>}
              {item.location && <em className="year">{" "}- {item.location}</em>}
            </div>
          ))}
          {featured?.map((item, index) => (
            <div key={`marq-feat-${index}`}>
              {item.year && <span className="year">{item.year}</span>}
              {item.title && <strong className="title">{" "}| {item.title}</strong>}
              {item.location && <em className="year">{" "}- {item.location}</em>}
            </div>
          ))}
          {featured?.map((item, index) => (
            <div key={`marq-feat-${index}`}>
              {item.year && <span className="year">{item.year}</span>}
              {item.title && <strong className="title">{" "}| {item.title}</strong>}
              {item.location && <em className="year">{" "}- {item.location}</em>}
            </div>
          ))}
        </div>
      </div>
    </StyledFeatured>
  )
}

const StyledFeatured = styled.div`
  width: 100%;
  height: auto;
  background-color: var(--blue);
  color: var(--white);
  padding: 2rem 0;
  position: relative;

  .heading {
    color: var(--white);
    padding-left: 3rem;
    margin-bottom: 0.5rem;
  }

  .marqueeCont {
    overflow: hidden;

    .track {
      display: flex;
      gap: 2.5rem;
      animation: marquee 40s linear infinite;
    }

    div {
      white-space: nowrap;
    }
  }

  @keyframes marquee {
    0% { transform: translateX(0) }
    100% { transform: translateX(-300%) }
  }

  @media screen and (max-width: 680px) {
    .marqueeCont .track {
      animation: marquee 20s linear infinite;
    }
  }
`

export default Featured
