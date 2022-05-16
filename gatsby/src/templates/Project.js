import { graphql } from "gatsby";
import React from "react";
import Layout from "../components/layout/layout";
import styled from "styled-components";
import BlockContent from '@sanity/block-content-to-react';
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import { GatsbyImage, getImage } from "gatsby-plugin-image"



// markup
export default function SingleMezcalPage({ data: { project } }) {

    function SampleNextArrow(props) {
        const { className, onClick } = props;
        return (
          <button className={className} onClick={onClick} onKeyDown={onClick}>
            <img src='/arrow-r.png' alt='arrow button right' />
          </button>
        );
      }
      
      function SamplePrevArrow(props) {
        const { className, onClick } = props;
        return (
          <button className={className} onClick={onClick} onKeyDown={onClick}>
            <img src='/arrow-l.png' alt='arrow button left'  />
          </button>
        );
      }

      
      const settings = {
        centerPadding: "0",
        dots: true,
        fade: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 4000,
        pauseOnHover: false,
        waitForAnimate: true,
        speed: 500,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
      };


    const black = true

  return (
    <Layout black={black}>
        <ProjectContainer id='mezcales'>
            <div className="textoseo">
                <h1>{project.title}</h1>
                <h2>
                <BlockContent
                    blocks={project._rawMetadata}
                />
                </h2>
                <div className="texto">
                    <BlockContent
                        blocks={project._rawDescription}
                    />
                </div>
                <div className="tags">
                    <p>{project.tags}</p>
                </div>
            </div>
            <SliderContainer  {...settings}>
                {project.sliderImages.map(({ _key, alt, asset }) => {
                        const bgGetDataImage = getImage(asset)
                        const bgGetDataImageAlt = alt
                return (
                    <Slide
                        key={_key}
                        className='slide'
                    >
                        <GatsbyImage
                            style={{ height: "100%", width: "100%" }}
                            image={bgGetDataImage}
                            alt={bgGetDataImageAlt}
                        />
                    </Slide>
                );
                })}
            </SliderContainer>
        </ProjectContainer>
    </Layout>
  );
}


const ProjectContainer = styled.section`
 `
const SliderContainer = styled(Slider)`
`

const Slide = styled.div`
`

export const query = graphql`
  query($slug: String!) {
    project: sanityProjectPage(slug: { current: { eq: $slug } }) {
        title
        _rawMetadata
        _rawDescription
        tags
        sliderImages {
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
  }
`;