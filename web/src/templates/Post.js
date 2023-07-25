import { graphql, Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import BlockContent from '@sanity/block-content-to-react';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Seo from "../components/layout/seo"
import Helmet from 'react-helmet'
import { localize } from "../utils/helpers"

// markup
export default function SinglePostPage({ data: { post }, pageContext: { language } }) {

    const bgGetDataImage = getImage(post.thumbnail.asset)
    const bgGetDataImageAlt = post.thumbnail.alt

    const localePost = localize(post, [language])

  return (
    <>
        <Helmet>
            <meta http-equiv="content-language" content={language} />
            <body className="postPageClass" />
        </Helmet>
        <Seo title={post.seo?.title2[language]} description={post.seo?.description2[language]} image={post.seo?.image?.asset?.url} />
        <PostContainer id='post'>
          <div className="close">
            <Link to={`/${language}/blog`}>
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
            <div className="date" data-sal="fade"
  data-sal-delay="150"
  data-sal-duration="500"
  data-sal-easing="ease">
              <div><strong>{post.author}</strong> | <em>{post.date}</em></div>
            </div>
            <div className="title" data-sal="fade"
  data-sal-delay="150"
  data-sal-duration="500"
  data-sal-easing="ease">
              <BlockContent
                  blocks={localePost._rawTitleStyle2}
              />
            </div>
            <div className="line" data-sal="fade"
  data-sal-delay="150"
  data-sal-duration="500"
  data-sal-easing="ease"></div>
            <div className="texto">
              <BlockContent
                  blocks={localePost._rawBodyText2}
              />
            </div>
            <div className="circle"></div>
          </div>
        </PostContainer>
    </>
  );
}


const PostContainer = styled.section`
position: relative;
width: 100vw;
    .imageFix {
      height: calc(100vh - 70px);
      top: 70px;
      width: 50%;
      left: 0;
      position: fixed;
      @media (max-width: 680px) {
          position: static;
          height: auto;
          width: 100%;
          padding-top: 80px;
      }
    }
    .close {
      position: fixed;
      top: 25px;
      left: 50px;
      z-index: 3;
      @media (max-width: 680px) {
          left: 20px;
          top: 30px;
      }
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
      bottom: 50px;
      animation-name: arrow ;
      animation-duration: 1.5s;
      animation-timing-function: ease-in-out;
      animation-iteration-count: infinite;
      animation-fill-mode: forwards;
      @media (max-width: 680px) {
          display: none;
      }
      img {
        width: 25px;
      }
    }


    @keyframes arrow {
        0% {
            bottom: 50px
        }
        50% {
            bottom: 70px;
        }
        100% {
            bottom: 50px;
        }
    }
    .content {
      width: 50%;
      position: absolute;
      padding-top: 70px;
      padding-left: 50px;
      padding-right: 50px;
      right: 0;
      @media (max-width: 680px) {
          width: 100%;
          padding-top: 20px;
          padding-left: 20px;
          padding-right: 20px;
      }
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
        @media (max-width: 680px) {
            width: 100%;
        }
        h1, h2, h3, h4, p {
          font-size: 1.5rem;
          /* font-weight: normal; */
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
        @media (max-width: 680px) {
            width: 100%;
        }
        p {
          padding-top: 10px;
          padding-bottom: 10px;
          line-height: 1.4;
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
        seo {
          title2 {
            en
            es
          }
          description2 {
            en
            es
          }
          image {
            asset {
              url
            }
          }
        }
        _rawTitleStyle2
        _rawBodyText2
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