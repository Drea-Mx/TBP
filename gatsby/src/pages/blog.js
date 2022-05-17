import React from "react"
import Layout from "../components/layout/layout"
// import Seo from "../components/layout/seo"
import { graphql, Link } from "gatsby"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"


export const data = graphql`
  query  {
    allSanityBlogPage {
    nodes {
      _id
      title
      slug {
        current
      }
      tagline
      date(formatString: "DD MMMM, YYYY")
      thumbnail {
        alt
        asset {
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
const black = true


const BlogPage = ({data}) => {
  return (
    <Layout black={black}>
      {/* <Seo title={data.sanityHomePage.seo.title.en} description={data.sanityHomePage.seo.description.en} image={data.sanityHomePage.seo.image.asset.url} /> */}
      <BlogContainer>
        <div className="text">
          <h1>Our <em>approach</em> on design.</h1>
          <div className="line"></div>
        </div>
        <div className="projects">
          {data.allSanityBlogPage.nodes.map(({ thumbnail, _id, title, tagline, date, slug }) => {
                  const bgGetDataImage = getImage(thumbnail.asset)
                  const bgGetDataImageAlt = thumbnail.alt
          return (
              <Link className="post"
                key={_id}
                to={`/blog/${slug.current}`}
              >
                <div className="image">
                  <GatsbyImage
                      style={{ height: "100%", width: "100%" }}
                      image={bgGetDataImage}
                      alt={bgGetDataImageAlt}
                  />
                </div>
                <div className="texto">
                  <h2>{title}</h2>
                  <strong>{tagline}</strong>
                  <div className="line"></div>
                  <p>{date}</p>
                </div>
              </Link>
          );
          })}
        </div>
      </BlogContainer>
    </Layout>
  )
}

const BlogContainer = styled.section`
  .text {
    padding-top: 100px;
    text-align: center;
    h1 {
      font-weight: normal;
      font-size: 2rem;
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
    grid-gap: 20px;
    padding-top: 50px;
    .post {
        color: var(--black);
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
`

export default BlogPage