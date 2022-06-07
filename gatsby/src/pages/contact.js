import React from "react"
import Layout from "../components/layout/layout"
import Seo from "../components/layout/seo"
import { graphql } from "gatsby"
import FormContact from "../components/contact/FormContact"


export const data = graphql`
  query  {
    sanityContactPage {
      seo {
        title
        description
        image {
          asset {
            url
          }
        }
      }
      _rawHeadline
      image {
        alt
        asset {
          gatsbyImageData(
            layout: FULL_WIDTH
            outputPixelDensities: 1.5
            placeholder: DOMINANT_COLOR
          )
          url
        }
      }
      videoMp4 {
        asset {
          url
        }
      }
      videoWebm {
        asset {
          url
        }
      }
    }
}
  `
const black = true


const ContactPage = ({data}) => {
  return (
    <Layout black={black}>
      <Seo title={data.sanityContactPage.seo.title} description={data.sanityContactPage.seo.description} image={data.sanityContactPage.seo.image.asset.url} />
      <FormContact data={data} />
    </Layout>
  )
}

export default ContactPage