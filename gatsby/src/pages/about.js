import React from "react"
import Layout from "../components/layout/layout"
// import Seo from "../components/layout/seo"
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
    }
}
  `
const black = true

const AboutPage = ({data}) => {
  return (
    <Layout black={black}>
      {/* <Seo title={data.sanityHomePage.seo.title.en} description={data.sanityHomePage.seo.description.en} image={data.sanityHomePage.seo.image.asset.url} /> */}
      <HeroAbout data={data} />
      <Team data={data} />
    </Layout>
  )
}

export default AboutPage