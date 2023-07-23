import React from "react"
import Seo from "../components/layout/seo"
import { graphql } from "gatsby"
import FormContact from "../components/contact/FormContact"
import Helmet from 'react-helmet'

const ContactPage = ({ data, pageContext: { language }}) => {
  return (
    <>
      <Helmet>
        <meta http-equiv="content-language" content={language} />
      </Helmet>
      <Seo
        title={data.sanityContactPage.seo.title2.translate}
        description={data.sanityContactPage.seo.description2.translate}
        image={data.sanityContactPage.seo.image.asset.url} />
      <FormContact data={data} language={language}/>
    </>
  )
}

export const data = graphql`
  query ContactPage($language: String) {
    sanityContactPage {
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
      _rawHeadline2
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
      video
    }
  }
`

export default ContactPage
