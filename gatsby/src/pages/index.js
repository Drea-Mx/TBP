import React from "react"
import Layout from "../components/layout/layout"
// import Seo from "../components/layout/seo"
import { graphql } from "gatsby"
import Hero from "../components/home/Hero"


export const data = graphql`
  query  {
    sanityHomePage {
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
    <Layout>
      {/* <Seo title={data.sanityHomePage.seo.title.en} description={data.sanityHomePage.seo.description.en} image={data.sanityHomePage.seo.image.asset.url} /> */}
      <Hero data={data} />
    </Layout>
  )
}

export default IndexPage
