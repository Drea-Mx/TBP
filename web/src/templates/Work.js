import React from "react"
import Seo from "../components/layout/seo"
import Filters from "../components/work/Filters"
import { graphql } from "gatsby"
import Helmet from 'react-helmet'
import ProjectsWork from "../components/work/ProjectsWork"

const WorkPage = ({ data, pageContext: { language } }) => {

  console.log('data.categories', data.categories)
  return (
    <>
      <Helmet>
        <meta http-equiv="content-language" content={language} />
      </Helmet>
      <Seo
        title={data.sanityWorkPage.seo.title2.translate}
        description={data.sanityWorkPage.seo.description2.translate}
        image={data.sanityWorkPage.seo.image.asset.url}
      />
      <Filters categories={data.categories.nodes} language={language} />
      <ProjectsWork data={data} language={language} />
    </>
  )
}

export const data = graphql`
  query WorkPage($language: String) {
    sanityWorkPage {
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
      _rawToTop
    }
    allSanityProjectPage(sort: {orderRank: ASC}) {
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
    categories: allSanityCategory {
      nodes {
        _key
        title {
          translate(language: $language)
        }
      }
    }
  }
`

export default WorkPage
