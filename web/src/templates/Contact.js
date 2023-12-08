import React from "react"
import Seo from "../components/layout/seo"
import { graphql } from "gatsby"
import FormContact from "../components/contact/FormContact"
import Helmet from 'react-helmet'
import Offices from "../components/contact/Offices"

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
      <Offices title={data.sanityContactPage._rawOfficesTitle} language={language} />
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
      _rawOfficesTitle
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
      services {
        translate(language: $language)
      }
      locations {
        translate(language: $language)
      }
      industries {
        translate(language: $language)
      }
      how {
        translate(language: $language)
      }
    }
  }
`

export default ContactPage
