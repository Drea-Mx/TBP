import { graphql, Link } from "gatsby";
import React from "react";
import Layout from "../components/layout/layout";
import styled from "styled-components";
import BlockContent from '@sanity/block-content-to-react';
import { GatsbyImage, getImage } from "gatsby-plugin-image"



// markup
export default function SinglePostPage({ data: { post } }) {


    const black = true

    const work = false

    const blog = true

    const bgGetDataImage = getImage(post.thumbnail.asset)
    const bgGetDataImageAlt = post.thumbnail.alt

    
  return (
    <Layout black={black} work={work} blog={blog}>
        <PostContainer id='post'>
          <div className="close">
            <Link to="/blog">
              <img src="/Close_ page_ X.png" alt='Close Page' />
            </Link>
          </div>
          <div className="imageFix">
            <GatsbyImage
                style={{ height: "100%", width: "100%" }}
                image={bgGetDataImage}
                alt={bgGetDataImageAlt}
            />
          </div>
          <div className="arrow">
            <img src='/ArrowDown.png' alt='Arow Down' />
          </div>
          <div className="content">
            <div className="date">
              <div><strong>{post.author}</strong> | <em>{post.date}</em></div>
            </div>
            <div className="title">
              <BlockContent
                  blocks={post._rawTitleStyle}
              />
            </div>
            <div className="line"></div>
            <div className="texto">
              <BlockContent
                  blocks={post._rawBodyText}
              />
            </div>
            <div className="circle"></div>
          </div>
        </PostContainer>
    </Layout>
  );
}


const PostContainer = styled.section`
    .imageFix {
      height: calc(100vh - 70px);
      top: 70px;
      width: 50%;
      left: 0;
      position: fixed;
    }
    .close {
      position: fixed;
      top: 25px;
      left: 50px;
      z-index: 3;
      a {
        width: 20px;
        height: 20px;
        img {
          width: 20px;
          filter: invert(100%);
        }
      }
      
    }
    .arrow {
      position: fixed;
      right: 50px;
      top: 50%;
      transform: translateY(-50%);
      img {
        width: 25px;
      }
    }
    .content {
      width: 50%;
      position: absolute;
      padding-top: 70px;
      padding-left: 50px;
      padding-right: 50px;
      right: 0;
      .date {
        color: var(--blue);
        padding-top: 25px;
        padding-bottom: 25px;
        strong {
          font-family: var(--plain);
          margin-right: 5px;
        }
        em {
          margin-left: 5px;
        }
      }
      .title {
        width: 80%;
        h1 {
          font-size: 5vw;
          font-weight: normal;
        }
      }
      .line {
            width: 20px;
            height: 3px;
            background-color: var(--blue);
            margin-top: 50px;
            margin-bottom: 20px;
        }
      .texto {
        width: 80%;
        p {
          padding-top: 10px;
          padding-bottom: 10px;
          strong em, em strong {
            color: var(--blue);
            font-family: var(--bold);
          }
          strong {
            font-family: var(--bold);
            font-weight: normal;
          }
          em {
            font-family: var(--reg);
            color: var(--blue);
          }
        }
        ul {
          list-style: inside;
        }
        h2 {
          font-weight: normal;
          font-size: 2.2rem;
          color: var(--blue);
        }
      }
      .circle {
          width: 12px;
          height: 12px;
          border: solid 3px var(--blue);
          margin: 50px 0 150px;
          border-radius: 50%;
      }
    }
`

export const query = graphql`
  query($slug: String!) {
    post: sanityBlogPage(slug: { current: { eq: $slug } }) {
        title
        _rawTitleStyle
        _rawBodyText
        date(formatString: "DD MMMM, YYYY")
        author
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
`;