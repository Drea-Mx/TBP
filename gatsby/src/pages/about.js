import React from "react"
import Seo from "../components/layout/seo"
import { graphql } from "gatsby"
import HeroAbout from "../components/about/HeroAbout"
import Team from "../components/about/Team"


export const data = graphql`
  query  {
    sanityAboutPage {
        _rawDescription
        _rawOurTeamText
        team {
        _key
        name
        position
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
        seo {
        title
        description
        image {
          asset {
            url
          }
        }
      }
    }

}
  `

const AboutPage = ({data}) => {
  return (
    <>
      <Seo title={data.sanityAboutPage.seo.title} description={data.sanityAboutPage.seo.description} image={data.sanityAboutPage.seo.image.asset.url} />
      <HeroAbout data={data} />
      <Team data={data} />
    </>
  )
}

export default AboutPage