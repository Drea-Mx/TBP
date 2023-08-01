import React, { useState, useEffect } from "react"
import Seo from "../components/layout/seo"
import Filters from "../components/work/Filters"
import { graphql } from "gatsby"
import Helmet from 'react-helmet'
import ProjectsWork from "../components/work/ProjectsWork"

const WorkPage = ({ data, pageContext: { language } }) => {

  const projects = data.allSanityProjectPage.edges

  const [filteredProjects, setProjects] = useState(projects)
  const [filteredCategories, setCategories] = useState([])
  const [first, setIsFirst] = useState(true)

  useEffect(() => {
    if(!first) {
      setProjects(projects.filter(project => filteredCategories.includes(project.node._rawCategory[0].value)))
    } else {
      setProjects(projects)
    }
  }, [filteredCategories])

  console.log('filteredProjects', filteredProjects.length)
  console.log('filteredCategories', filteredCategories)

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
      <Filters
        filteredCategories={filteredCategories}
        setCategories={setCategories}
        filteredProjects={filteredProjects}
        categories={data.categories.nodes}
        language={language}
        projects={projects}
        setProjects={setProjects}
        setIsFirst={setIsFirst}
      />
      <ProjectsWork data={data} language={language} projects={filteredProjects} />
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
          _rawCategory(resolveReferences: {maxDepth: 5})
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
        value
        title {
          translate(language: $language)
        }
      }
    }
  }
`

export default WorkPage
