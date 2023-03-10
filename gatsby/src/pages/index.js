import React from "react";
import Seo from "../components/layout/seo"
import { graphql } from "gatsby"
import Hero from "../components/home/Hero"
import Lead from "../components/home/Lead"
import Projects from "../components/home/Projects"
import Form from "../components/home/Form"
import Helmet from 'react-helmet'


export const data = graphql`
  query  {
    sanityHomePage {
      seo {
        title
        description
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
      _rawLeadText 
    }
    allSanityProjectPage(sort: {fields: orderRank, order: ASC}, limit: 6) {
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
}
  `


const IndexPage = ({data}) => {




  return (
    <>
      <Helmet>
          <body className="indexPageClass" />
          <script>{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-N6B8TSV');`}</script>
          <noscript><iframe src={`https://www.googletagmanager.com/ns.html?id=GTM-N6B8TSV`}
          height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
      </Helmet>
      <Seo title={data.sanityHomePage.seo.title} description={data.sanityHomePage.seo.description} image={data.sanityHomePage.seo.image.asset.url} />
      <Hero data={data} />
      <Lead data={data} />
      <Projects data={data} />
      <Form />
    </>
  )
}

export default IndexPage
