import React from "react"
import Layout from "../components/layout/layout"
import Seo from "../components/layout/seo"
import { graphql } from "gatsby"
import ProjectsWork from "../components/work/ProjectsWork"



export const data = graphql`
  query  {
    sanityWorkPage {
      seo {
        title
        description
        image {
          asset {
            url
          }
        }
      }
      projects {
        _key
        project1 {
          title
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
        project2 {
          title
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
        project3 {
          title
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
        project4 {
          title
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
        project5 {
          title
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
        project6 {
          title
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
}
  `
const black = true


const WorkPage = ({data}) => {
  return (
    <Layout black={black}>
      <Seo title={data.sanityWorkPage.seo.title} description={data.sanityWorkPage.seo.description} image={data.sanityWorkPage.seo.image.asset.url} />
      <ProjectsWork data={data} />
    </Layout>
  )
}

export default WorkPage