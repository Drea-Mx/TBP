import React from "react"
import Seo from "../components/layout/seo"
import { graphql } from "gatsby"
import Helmet from 'react-helmet'
import HeroAbout from "../components/about/HeroAbout"
import Team from "../components/about/Team"
import Counter from "../components/about/Counter"
import Services from "../components/about/Services"
import Featured from "../components/about/Featured"
import Process from "../components/about/Process"

const AboutPage = ({ data, pageContext: { language }}) => {
  return (
    <>
      <Helmet>
        <meta http-equiv="content-language" content={language} />
      </Helmet>
      <Seo
        title={data.sanityAboutPage.seo.title2.translate}
        description={data.sanityAboutPage.seo.description2.translate}
        image={data.sanityAboutPage.seo.image.asset.url}
      />
      <HeroAbout data={data} language={language} />
      <Counter data={data.sanityAboutPage} />
      <Services data={data.sanityAboutPage} language={language} />
      <Process data={data.sanityAboutPage} language={language} />
      <Featured data={data.sanityAboutPage} language={language} />
      <Team data={data} language={language} />
    </>
  )
}

export const data = graphql`
  query AboutPage($language: String) {
    sanityAboutPage {
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
      _rawDescription2
      _rawOurTeamText2
      projectsTitle {
        translate(language: $language)
      }
      projects
      countriesTitle {
        translate(language: $language)
      }
      countries
      sinceTitle {
        translate(language: $language)
      }
      since
      teamImage {
        asset {
          url
        }
      }
      _rawServicesTitle
      _rawServices
      _rawOurProcessTitle
      _rawOurProcessSteps
      _rawFeaturedTitle
      _rawFeatured
      _rawToTop
      team {
        _key
        name
        position2 {
          translate(language: $language)
        }
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
  }
`

export default AboutPage
