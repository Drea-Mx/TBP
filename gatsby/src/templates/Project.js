import { graphql, Link } from "gatsby";
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
            <img src='/Right_ arrow.png' alt='arrow button right' />
          </button>
        );
      }
      
      function SamplePrevArrow(props) {
        const { className, onClick } = props;
        return (
          <button className={className} onClick={onClick} onKeyDown={onClick}>
            <img src='/Left_ arrow.png' alt='arrow button left'  />
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


    const black = false

    const work = true

  return (
    <Layout black={black} work={work}>
        <ProjectContainer id='project'>
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
            <div className="title">
              <p>{project.title}</p>
            </div>
            <div className="close">
              <Link to="/work">
                <img src="/Close_ page_ X.png" alt='Close Page' />
              </Link>
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
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;
background-color: black;
.textoseo {
  padding-top: 100px;
  position: absolute;
  width: 100%;
}
.title {
  p {
    color: var(--white);
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 1.2rem;
  }
}
.close {
  position: absolute;
  top: 25px;
  left: 50px;
  z-index: 3;
  a {
    width: 20px;
    height: 20px;
    img {
      width: 20px;
    }
  }
  
}
 `
const SliderContainer = styled(Slider)`
position: relative;
top: 0;
height: 100%;
.slick-arrow {
    position: absolute;
    z-index: 1;
    bottom: 5px;
    transform: translateY(-50%);
    img {
        width: 25px;
        @media (max-width: 730px) {
          width: 15px;
        }
    }
}
.slick-next {
    right: 20px;
    @media (max-width: 730px) {
      right: 10px;
    }
  }
.slick-prev {
    left: 20px;
    @media (max-width: 730px) {
      left: 10px;
    }
}

.slick-dots {
    position: absolute;
    bottom: 20px;
    display: flex !important;
    justify-content: center;
    align-items: center;
    height: 2px;
    width: 50%;
    margin: 0 auto;
    left: 50%;
    transform: translateX(-50%);
    list-style: none;
    @media (max-width: 862px) {
      bottom: 30px;
    }
    @media (max-width: 730px) {
      width: 80%;
    }
}

.slick-dots li {
    background-color: none;
    margin: 0 10px;
    border-radius: 50%;
    list-style: none;
}

.slick-dots li button {
    border-radius: 50%;
    background-color: rgba(76, 76, 76, 1);
    width: 8px;
    height: 8px;
    font-size: 0;
}
.slick-dots li button span {
  display: none;
}
.slick-dots li.slick-active button {
    background-color: var(--white);
}
`

const Slide = styled.div`
position: relative;
height: calc(100vh - 60px);
padding-top: 70px;
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