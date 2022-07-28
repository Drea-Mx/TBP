import React from "react";
import Seo from "../components/layout/seo"
import { graphql } from "gatsby"
import Hero from "../components/home/Hero"
import Lead from "../components/home/Lead"
import Projects from "../components/home/Projects"
import Form from "../components/home/Form"
import Helmet from 'react-helmet'


export const data = graphql`
  query  {
    sanityHomePage {
      seo {
        title
        description
        image {
          asset {
            url
          }
        }
      }
      heroBackgroundImage {
        alt
        asset {
          gatsbyImageData(
            layout: FULL_WIDTH
            outputPixelDensities: 1.5
            placeholder: DOMINANT_COLOR
          )
        }
      }
      heroTexto
      _rawLeadText 
    }
    allSanityProjectPage(sort: {fields: orderRank, order: ASC}, limit: 2) {
      edges {
        node {
          title
          _key
          slug {
            current
          }
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
    sanityGlobalPage {
      whiteLogo {
        alt
        asset {
          url
        }
      }
    }
}
  `


const IndexPage = ({data}) => {




  return (
    <>
      <Helmet>
          <body className="indexPageClass" />
      </Helmet>
      <Seo title={data.sanityHomePage.seo.title} description={data.sanityHomePage.seo.description} image={data.sanityHomePage.seo.image.asset.url} />
      <Hero data={data} />
      <Lead data={data} />
      <Projects data={data} />
      <Form />
    </>
  )
}

export default IndexPage
