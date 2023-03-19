import { graphql, Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import BlockContent from '@sanity/block-content-to-react';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Seo from "../components/layout/seo"
import Helmet from 'react-helmet'
import HeroLanding from "../components/landing/HeroLanding";

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