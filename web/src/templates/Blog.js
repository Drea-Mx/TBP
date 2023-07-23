import React from "react"
import Seo from "../components/layout/seo"
import { graphql, Link } from "gatsby"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Helmet from 'react-helmet'
import { localize } from "../utils/helpers";
import BlockContent from '@sanity/block-content-to-react';
import scrollTo from 'gatsby-plugin-smoothscroll';

const BlogPage = ({ data, pageContext: { language }}) => {
  const heading = localize(data.sanityBlog._rawHeading, [language])
  const top = localize(data.sanityBlog._rawToTop, [language])
  return (
    <>
     <Helmet>
        <meta http-equiv="content-language" content={language} />
      </Helmet>
      <Seo
        title={data.sanityBlog.seo.title2.translate}
        description={data.sanityBlog.seo.description2.translate}
        image={data.sanityBlog.seo.image.asset.url}
      />
      <BlogContainer id='top'>
        <div className="text">
          <h1>
            <BlockContent
              blocks={heading}
            />
          </h1>
          <div className="line"></div>
        </div>
        <div className="projects">
          {data.allSanityBlogPage.nodes.map(({ thumbnail, _id, title2, tagline, date, slug }) => {
                  const bgGetDataImage = getImage(thumbnail.asset)
                  const bgGetDataImageAlt = thumbnail.alt
          return (
              <Link className="post"
                key={_id}
                to={`/${language}/${slug.current}`}
              >
                <div className="image">
                  <GatsbyImage
                      style={{ height: "100%", width: "100%" }}
                      image={bgGetDataImage}
                      alt={bgGetDataImageAlt}
                  />
                </div>
                <div className="texto">
                  <h2>{title2?.translate}</h2>
                  <strong>{tagline?.translate}</strong>
                  <div className="line"></div>
                  <p>{date}</p>
                </div>
              </Link>
          );
          })}
        </div>
        <div className='more'>
          <button onClick={() => scrollTo('#top')} >
            <BlockContent
              blocks={top}
            />
          </button>
        </div>
      </BlogContainer>
    </>
  )
}

const BlogContainer = styled.section`
  .text {
    padding-top: 100px;
    text-align: center;
    h1 {
      font-weight: normal;
      font-size: 2rem;
      @media (max-width: 680px) {
          font-size: 10vw;
      }
      em {
        color: var(--blue);
      }
    }
    .line {
        width: 20px;
        height: 3px;
        background-color: var(--blue);
        margin: 15px auto;
    }
  }
  .projects {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 50px 20px;
    padding-top: 50px;
    padding-bottom: 100px;
    @media (max-width: 680px) {
      grid-template-columns: repeat(1, 1fr);
      padding-bottom: 50px;
    }
    .post {
        color: var(--black);
        .image {
          height: auto;
          @media (max-width: 680px) {
            height: auto;
          }
        }
      .texto {
        text-align: center;
        padding: 0 15px;
        h2 {
          font-size: 1.9rem;
          font-weight: normal;
          color: var(--blue);
          margin-bottom: 10px;
          margin-top: 20px;
        }
        strong {
          font-weight: normal;
          font-family: var(--plain);
          font-size: 0.8rem;
        }
        .line {
            width: 20px;
            height: 3px;
            background-color: var(--blue);
            margin: 15px auto;
        }
      }
    }
  }
  .more {
        background-color: var(--black);
        font-size: 1.2rem;
        font-weight: normal;
        text-align: center;
        width: 100%;
        color: var(--white);
        padding: 25px 10px;
        button {
            background-color: var(--blue);
            padding: 5px 15px;
            border-radius: 5px;
            color: var(--white);
        }
    }
`

export const data = graphql`
  query Blog($language: String) {
    sanityBlog {
      seo {
        title2 {
          translate(language: $language)
        }
        description2 {
          translate(language: $language)
        }
        image {
          asset {
            url
          }
        }
      }
      _rawHeading
      _rawToTop
    }
    allSanityBlogPage(sort: {orderRank: ASC}) {
      nodes {
        _id
        title2 {
          translate(language: $language)
        }
        slug {
          current
        }
        tagline2 {
          translate(language: $language)
        }
        date(formatString: "DD MMMM, YYYY")
        thumbnail {
          alt
          asset {
            url
            gatsbyImageData(
              layout: FULL_WIDTH
              outputPixelDensities: 1.5
              placeholder: DOMINANT_COLOR
            )
          }
        }
      }
    }
  }
`

export default BlogPage