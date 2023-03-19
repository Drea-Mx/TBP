import { graphql, Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import BlockContent from '@sanity/block-content-to-react';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Seo from "../components/layout/seo"
import Helmet from 'react-helmet'
import HeroLanding from "../components/landing/HeroLanding"
import { AboutLanding } from "../components/landing/HeroLanding/styles"

export default function LandingPage({ data: { landing } }) {
  const { seo, video, _rawText, _rawCtaText, cta, thumbnail, _rawAbout } = landing

  return (
    <>
      <Seo title={seo.title} description={seo.description} image={seo.image?.asset?.url} />
      <HeroLanding
        text={_rawText}
        ctaText={_rawCtaText}
        cta={cta}
        video={video}
        thumbnail={thumbnail}
      />
      <AboutLanding>
        <BlockContent blocks={_rawAbout} />
        <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.5 23C5.16125 23 0 17.8439 0 11.5C0 5.15607 5.16125 0 11.5 0C17.8387 0 23 5.16125 23 11.5C23 17.8387 17.8387 23 11.5 23ZM11.5 4.90189C7.85859 4.90189 4.89671 7.86378 4.89671 11.5C4.89671 15.1362 7.85859 18.0981 11.5 18.0981C15.1414 18.0981 18.0981 15.1362 18.0981 11.5C18.0981 7.86378 15.1362 4.90189 11.5 4.90189Z" fill="black"/>
        </svg>
      </AboutLanding>
    </>
  );
}

export const query = graphql`
  query($slug: String!) {
    landing: sanityLandingPage(slug: { current: { eq: $slug } }) {
      seo {
        title
        description
        image {
          asset {
            url
          }
        }
      }
      thumbnail {
        asset {
          gatsbyImageData(
            layout: FULL_WIDTH
            outputPixelDensities: 1.5
            placeholder: DOMINANT_COLOR
          )
        }
      }
      video
      _rawText
      _rawCtaText
      cta
      _rawAbout
      heading
      projects {
        slider {
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
      _rawCtaProjects
      cities
      cities2
      cities3
      cities4
      _rawContactHeading
    }
  }
`;