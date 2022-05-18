import React from "react"
import Layout from "../components/layout/layout"
// import Seo from "../components/layout/seo"
import { graphql } from "gatsby"
import FormContact from "../components/contact/FormContact"


export const data = graphql`
  query  {
    sanityContactPage {
      _rawHeadline
      image {
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
  `
const black = true


const ContactPage = ({data}) => {
  return (
    <Layout black={black}>
      {/* <Seo title={data.sanityHomePage.seo.title.en} description={data.sanityHomePage.seo.description.en} image={data.sanityHomePage.seo.image.asset.url} /> */}
      <FormContact data={data} />
    </Layout>
  )
}

export default ContactPage