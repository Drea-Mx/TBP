import { graphql, Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import BlockContent from '@sanity/block-content-to-react';
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Seo from "../components/layout/seo"
import Helmet from 'react-helmet'

// markup
export default function SingleMezcalPage({ data: { project } }) {


  const sliderRef = React.useRef(null);
    React.useEffect(() => {
      const track = sliderRef.current.innerSlider.list.querySelector('.slick-track');
      const focusSlider = setTimeout(() => {
        const slide = track.querySelector('.slick-slide');
        slide.focus();
      }, 0);
      return () => clearTimeout(focusSlider);
    }, []);
    const handleNextClick = () => sliderRef.current.slickNext();
    const handlePrevClick = () => sliderRef.current.slickPrev();

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
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 4000,
        pauseOnHover: false,
        waitForAnimate: true,
        speed: 500,
        nextArrow: <SampleNextArrow onClick={handleNextClick}/>,
        prevArrow: <SamplePrevArrow onClick={handlePrevClick} />,
        ref: sliderRef,
      };



  return (
    <>
        <Helmet>
            <body className="projectPageClass" />
        </Helmet>
        <Seo title={project.seo.title} description={project.seo.description} image={project.seo.image.asset.url} />
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
                <div className="slide">
                  <div className="cont">
                    <div className="width">
                      <div className="meta">
                        <BlockContent
                            blocks={project._rawMetadata}
                        />
                      </div>
                      <div className="texto">
                        <BlockContent
                            blocks={project._rawDescription}
                        />
                      </div>
                      <div className='line'></div>
                      <div className="tags">
                          <p>{project.tags}</p>
                      </div>
                      <div className='circle'></div>
                    </div>
                  </div>
                </div>
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
    </>
  );
}


const ProjectContainer = styled.section`
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;
background-color: black;
@media (max-width: 680px) {
      z-index: 1;
  }
.textoseo {
  padding-top: 100px;
  position: absolute;
  width: 100%;
  @media (max-width: 680px) {
      z-index: -1;
  }
}
.title {
  p {
    color: var(--white);
    position: absolute;
    bottom: 40px;
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
  filter: invert(1);
  @media (max-width: 680px) {
      left: auto;
      right: 30px;
      z-index: 1;
      top: 40px;
  }
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
    bottom: 16px;
    transform: translateY(-50%);
    img {
        width: 25px;
        @media (max-width: 730px) {
          width: 25px;
        }
    }
}
.slick-next {
    right: 50px;
    @media (max-width: 730px) {
      right: 30px;
    }
  }
.slick-prev {
    left: 50px;
    @media (max-width: 730px) {
      left: 30px;
    }
}

.slick-dots {
    position: absolute;
    bottom: 25px;
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
      bottom: 25px;
    }
    @media (max-width: 730px) {
      width: 70%;
    }
}

.slick-dots li {
    background-color: none;
    margin: 0 8px;
    border-radius: 50%;
    list-style: none;
}

.slick-dots li button {
    border-radius: 50%;
    background-color: rgba(76, 76, 76, 1);
    width: 7px;
    height: 7px;
    font-size: 0;
}
.slick-dots li button span {
  display: none;
}
.slick-dots li.slick-active button {
    background-color: var(--white);
}

.slide {
  position: relative;
  height: calc(100vh - 80px);
  .cont {
    background-color: white;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .width {
      width: 65%;
      margin: 0 auto;
      @media (max-width: 900px) {
        width: 90%;
        .texto, .tags {
          p {
            font-size: 1rem !important;
            line-height: 1.2 !important;
          }
        }
      }
      .meta {
        color: var(--blue);
        padding-bottom: 25px;
        @media (max-width: 400px) {
          padding-bottom: 15px;
      }
      }
      .texto, .tags, .meta {
        p {
          font-size: 1.3rem;
          line-height: 1.7;
          letter-spacing: 0.5px;
        }
        @media (max-width: 400px) {
          p {
            font-size: 0.8rem !important;
          }
      }
      }
      .line {
          width: 25px;
          height: 3px;
          background-color: var(--blue);
          margin-bottom: 15px;
          margin-top: 15px;
          @media (max-width: 680px) {
            margin-bottom: 10px;
            margin-top: 10px;
          }
      }
      .circle {
          width: 15px;
          height: 15px;
          border: solid 3px var(--blue);
          border-radius: 50%;
          margin-top: 15px;
          @media (max-width: 680px) {
            margin-top: 10px;
          }
      }
    }
  }
}
`

const Slide = styled.div`
position: relative;
height: calc(100vh - 80px);

`

export const query = graphql`
  query($slug: String!) {
    project: sanityProjectPage(slug: { current: { eq: $slug } }) {
        title
        _rawMetadata
        _rawDescription
        tags
        seo {
          title
          description
          image {
            asset {
              url
            }
          }
        }
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