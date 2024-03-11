import { graphql, Script } from "gatsby";
import React from "react";
import BlockContent from '@sanity/block-content-to-react';
import Seo from "../components/layout/seo"
import { AboutLanding } from "../components/landing/HeroLanding/styles"
import HeroLanding from "../components/landing/HeroLanding"
import Projects from "../components/landing/Projects"
import Marquee from "../components/landing/Marquee";
import ContactLanding from "../components/landing/Contact";
import { Helmet } from "react-helmet";

export default function LandingPage({ data: { landing } }) {
  const {
    seo,
    thumbnail,
    video,
    _rawText,
    _rawCtaText,
    cta,
    _rawAbout,
    _rawHeading,
    projects,
    _rawCtaProjects,
    cities,
    cities2,
    cities3,
    cities4,
    _rawContactHeading,
    formHeading,
    _rawFormSuccess
  } = landing

  return (
    <>
      <Script id="DoubleClickFloodlightTag">{`
        var axel = Math.random() + "";
        var a = axel * 10000000000000;
        var iframe = document.createElement('iframe');
        iframe.src = "https://14255851.fls.doubleclick.net/activityi;src=14255851;type=pagev0;cat=pixel0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=;gdpr_consent=;ord=" + a;
        iframe.width = "1";
        iframe.height = "1";
        iframe.frameBorder = "0";
        iframe.style.display = "none";
        document.body.appendChild(iframe);
      `}</Script>
      <Script id="meta-pixel-lnd-ntv">{`
        var _nattp = _nattp || [];
         _nattp.push(['id', '65d36f84c6436d660ae06785',{nat_name: 'session_relevant'}]);
         (function() {
           var nattp = document.createElement('script'); nattp.type = 'text/javascript';
           nattp.src = '//cdn.nativery.com/widget/js/nattp.js';
           var nattps = document.getElementsByTagName('script')[0]; nattps.parentNode.insertBefore(nattp, nattps);
         })();
      `}</Script>
      <Helmet>
        <noscript>
          {`
            <iframe src="https://14255851.fls.doubleclick.net/activityi;src=14255851;type=pagev0;cat=pixel0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=;gdpr_consent=;ord=1?" width="1" height="1" frameborder="0" style="display:none"></iframe>
          `}
        </noscript>
        <noscript>
          {`
            <img height="1" width="1" src="//w.nativery.com/tp.gif?id=65d36f84c6436d660ae06785&nat_name=session_relevant" />
          `}
        </noscript>
      </Helmet>
      <Seo title={seo?.title2?.es} description={seo?.description2?.es} image={seo?.image?.asset?.url} />
      <HeroLanding
        text={_rawText}
        ctaText={_rawCtaText}
        cta={cta}
        video={video}
        thumbnail={thumbnail}
      />
      <ContactLanding
        heading={_rawContactHeading}
        successHeading={formHeading}
        successText={_rawFormSuccess}
      />
      <AboutLanding>
        <BlockContent blocks={_rawAbout} />
        <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.5 23C5.16125 23 0 17.8439 0 11.5C0 5.15607 5.16125 0 11.5 0C17.8387 0 23 5.16125 23 11.5C23 17.8387 17.8387 23 11.5 23ZM11.5 4.90189C7.85859 4.90189 4.89671 7.86378 4.89671 11.5C4.89671 15.1362 7.85859 18.0981 11.5 18.0981C15.1414 18.0981 18.0981 15.1362 18.0981 11.5C18.0981 7.86378 15.1362 4.90189 11.5 4.90189Z" fill="black"/>
        </svg>
      </AboutLanding>
      <Projects
        heading={_rawHeading}
        projects={projects}
        cta={_rawCtaProjects}
      />
      <Marquee
        cities={cities}
        cities2={cities2}
        cities3={cities3}
        cities4={cities4}
      />
    </>
  );
}

export const query = graphql`
  query($slug: String!) {
    landing: sanityLandingPage(slug: { current: { eq: $slug } }) {
      seo {
        title2 {
          es
        }
        description2 {
          es
        }
        image {
          asset {
            url
          }
        }
      }
      thumbnail {
        asset {
          gatsbyImageData(
            layout: FULL_WIDTH
            outputPixelDensities: 1.5
            placeholder: DOMINANT_COLOR
          )
        }
      }
      video
      _rawText
      _rawCtaText
      cta
      _rawAbout
      _rawHeading
      projects {
        _key
        title
        slider {
          _key
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
      _rawCtaProjects
      cities
      cities2
      cities3
      cities4
      _rawContactHeading
      formHeading
      _rawFormSuccess
    }
  }
`;