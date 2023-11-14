import React from "react";
import Seo from "../components/layout/seo"
import { graphql } from "gatsby"
import Hero from "../components/home/Hero"
import Lead from "../components/home/Lead"
import Projects from "../components/home/Projects"
import Helmet from 'react-helmet'
import { localize } from "../utils/helpers";

const IndexPage = ({ data, pageContext: { language }}) => {
  const text = localize(data.sanityHomePage._rawLeadText2, [language])

  return (
    <>
      <Helmet>
        <meta http-equiv="content-language" content={language} />
        <body className="indexPageClass" />
      </Helmet>
      <Seo
        title={data.sanityHomePage.seo.title2.translate}
        description={data.sanityHomePage.seo.description2.translate}
        image={data.sanityHomePage.seo.image.asset.url}
      />
      <Hero data={data.sanityHomePage} language={language} />
      <Lead data={text} />
      <Projects data={data} language={language} />
    </>
  )
}

export const data = graphql`
  query IndexPage($language: String) {
    sanityHomePage {
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
      heroBackgroundImage {
        alt
        asset {
          gatsbyImageData(
            layout: FULL_WIDTH
            outputPixelDensities: 1.5
            placeholder: DOMINANT_COLOR
          )
        }
      }
      heroTexto
      _rawCta
      _rawLeadText2
      _rawRecent
      _rawRecentCta
      _rawFormTitle
    }
    allSanityProjectPage(sort: {orderRank: ASC}, limit: 6) {
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
    sanityGlobalPage {
      whiteLogo {
        alt
        asset {
          url
        }
      }
    }
    sanityContactPage {
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

export default IndexPage
