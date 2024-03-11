import React from "react"
import Seo from "../components/layout/seo"
import { graphql } from "gatsby"
import ThankYou from "../components/contact/ThankYou"
import TrackingPixelsTY from "../components/landing/Pixels/TY"

const ThankYouPage = ({ data, pageContext: { language } }) => {
  return (
    <>
      <Seo
        title={data.sanityGlobalPage.thankYou.eyebrow.translate}
      />
      <TrackingPixelsTY />
      <ThankYou data={data} language={language} />
    </>
  )
}

export const data = graphql`
  query ThankYouPage($language: String)  {
    sanityContactPage {
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
    }
    sanityGlobalPage {
      thankYou {
        eyebrow {
          translate(language: $language)
        }
        _rawHeading
        video
      }
    }
  }
`

export default ThankYouPage
