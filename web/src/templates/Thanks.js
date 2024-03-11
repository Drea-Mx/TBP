import React from "react"
import Seo from "../components/layout/seo"
import { graphql, Script } from "gatsby"
import ThankYou from "../components/contact/ThankYou"
import { Helmet } from "react-helmet"

const ThankYouPage = ({ data, pageContext: { language } }) => {
  return (
    <>
      <Script id="meta-pixel-ty">{`
        var _nattp = _nattp || [];
        _nattp.push(['id', '65d36fd3c6436d660ae067a8',{nat_name: 'conversion'}]);
        (function() {
          var nattp = document.createElement('script'); nattp.type = 'text/javascript';
          nattp.src = '//cdn.nativery.com/widget/js/nattp.js';
          var nattps = document.getElementsByTagName('script')[0]; nattps.parentNode.insertBefore(nattp, nattps);
        })();
      `}</Script>
      <Helmet>
        <noscript>
          {`
            <img height="1" width="1" src="//w.nativery.com/tp.gif?id=65d36fd3c6436d660ae067a8&nat_name=conversion" />
          `}
        </noscript>
        <noscript>
          {`
            <iframe src="https://14255851.fls.doubleclick.net/activityi;src=14255851;type=leads0;cat=pixel0;qty=1;cost=[Revenue];dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=;gdpr_consent=;ord=[OrderID]?" width="1" height="1" frameborder="0" style="display:none"></iframe>
          `}
        </noscript>
      </Helmet>
      <Seo
        title={data.sanityGlobalPage.thankYou.eyebrow.translate}
      />
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
