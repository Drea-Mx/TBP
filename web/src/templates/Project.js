import { graphql, Link, navigate } from "gatsby";
import React, { useEffect } from 'react';
import styled from "styled-components";
import BlockContent from '@sanity/block-content-to-react';
import Slider from "react-slick"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Seo from "../components/layout/seo"
import Helmet from 'react-helmet'
import { localize } from "../utils/helpers";
import "slick-carousel/slick/slick.css"

// markup
export default function ProjectPage({ data: { project }, pageContext: { language, next, previous, slug } }) {

  useEffect(() => {
    const handleEsc = (event) => {
       if (event.keyCode === 27) {
        goBack()
      }
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);


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
        arrows: true,
      };

  const localeProject = localize(project, [language])

  const goBack = () => {
    navigate(`/${language}/work/#${project.title}`)
  }

  const pinType = "buttonPin";

  // Add this to your component where you want the button to appear
  // return <a href={to} target="_blank" rel="noreferrer" data-pin-do={pinType} />;

  return (
    <>
        <Helmet>
            <body className="projectPageClass" />
            <meta http-equiv="content-language" content={language} />
        </Helmet>
        <Seo title={project.seo.title2[language]} description={project.seo.description2[language]} image={project.seo.image.asset.url} />
        <ProjectContainer id='project'>
            <div className="textoseo">
                <h1>{project.title}</h1>
                <h2>
                <BlockContent
                    blocks={localeProject._rawMetadata2}
                />
                </h2>
                <div className="texto">
                    <BlockContent
                        blocks={localeProject._rawDescription2}
                    />
                </div>
                <div className="tags">
                  <p>{localeProject.tags2[language]}</p>
                </div>
            </div>
            <div className="title">
              <p>{project.title}</p>
            </div>
            <div className="close">
              <button onClick={goBack}>
                <img src="/Close_ page_ X.png" alt='Close Page' />
              </button>
            </div>
            <SliderContainer  {...settings}>
                <div className="slide">
                  <div className="cont">
                    <div
                      className="width"
                      data-sal="fade"
                      data-sal-delay="300"
                      data-sal-duration="500"
                      data-sal-easing="ease"
                    >
                      <div className="meta">
                        <BlockContent
                            blocks={localeProject._rawMetadata2}
                        />
                      </div>
                      <div className="texto">
                        <BlockContent
                            blocks={localeProject._rawDescription2}
                        />
                      </div>
                      <div className='line'></div>
                      <div className="tags">
                        <p>{localeProject.tags2[language]}</p>
                      </div>
                      <div className='circle'></div>
                      <div className="controls">
                        <div className="previous">
                          {previous && (
                            <Link to={`/${language}/${previous.slug.current}`}>
                              <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 0.999939L2 6.99994L8 12.9999" stroke="white" stroke-width="1.5"/>
                              </svg>
                              {language === 'en' ? 'Previous project' : 'Proyecto anterior'}
                            </Link>
                          )}
                        </div>
                        <div className="next">
                          {next && (
                            <Link to={`/${language}/${next.slug.current}`}>
                              {language === 'en' ? 'Next project' : 'Siguiente proyecto'}
                              <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 13.0001L7 7.00006L1 1.00006" stroke="white" stroke-width="1.5"/>
                              </svg>
                            </Link>
                          )}
                        </div>
                      </div>
                    </div>
                    </div>
                  </div>
                {project?.sliderImages?.map(({ _key, alt, asset }) => {
                  const bgGetDataImage = getImage(asset)
                  const bgGetDataImageAlt = alt || ""
                  const url = `https://tbp.studio/${language}/${slug}`;
                  const description = `&description=${project.title} | TBP Studio`;
                  const mediaUrl = pinType === "buttonPin" ? `&media=${bgGetDataImage.images.fallback.src}` : "";
                  const to = `https://www.pinterest.com/pin/create/button/?url=${url}${description}${mediaUrl}`

                  return (
                      <Slide
                        key={_key}
                        className='slide'
                      >
                          <a
                            href={to}
                            target="_blank"
                            rel="noreferrer"
                            data-pin-do={pinType}
                          />
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

  .meta, .tags, .texto {
    user-select: all;
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
  right: 50px;
  z-index: 3;
  filter: invert(1);
  @media (max-width: 680px) {
      left: auto;
      right: 30px;
      z-index: 1;
      top: 40px;
  }
  button {
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
.slick-dots {
  bottom: 5px;
  filter: invert(1);
}

.slick-dots li.slick-active button {
    background-color: var(--white);
}

.slick-dots li.slick-active button:before {
  opacity: 1;
}

.slick-dots li {
  margin: 0;
}

.slick-dots li button::before {
  font-size: 9px;
}

.slick-arrow {
    position: absolute !important;
    z-index: 1;
    bottom: 16px;
    transform: translateY(-50%);
    img {
        width: 25px;
        height: 25px;
        object-fit: contain;
        @media (max-width: 730px) {
          width: 25px;
        }
    }
}



.slick-next {
    right: 50px;
   top: 95%;
    @media (max-width: 730px) {
      right: 30px;
      top: 93%;
    }
  }
.slick-prev {
    left: 50px;
    top: 95%;
    @media (max-width: 730px) {
      left: 30px;
      top: 93%;
    }
}

.slick-prev:before, .slick-next:before {
  content: '';
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
      position: relative;
      width: 65%;
      height: 100vh;
      padding: 6rem 0;
      margin: 0 auto;
      @media (max-width: 900px) {
        width: 90%;
        padding: 6rem 0;
        .texto, .tags {
          p {
            font-size: 1rem !important;
            line-height: 1.2 !important;
          }
        }

        .controls {
          bottom: 7rem !important;
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
          margin-bottom: 50px;
          @media (max-width: 680px) {
            margin-top: 10px;
          }
      }

      .controls {
        display: flex;
        height: auto;
        position: absolute;
        bottom: 4rem;
        left: 0;
        right: 0;

    .previous, .next {
      width: 50%;

      a {
        transition: 0.25s ease;
        color: var(--white);
        background-color: var(--blue);
        padding: 0.5rem 1rem;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        width: fit-content;
        border-radius: 50px;

        svg {
          display: block;
        }

        &:hover {
          background-color: var(--black);
        }
      }
    }

     @media screen and (max-width: 780px) {
      .next {
        width: 50%;
      }

      .previous, .next {
        a {
          font-size: 14px;
        }
      }
    }

    .next a {
      margin-left: auto;
    }
      }
    }
  }
}

@media screen and (max-width: 780px) {
  .slick-list {
    height: calc(100% - 5.25rem);
  }

  .slick-dots {
     bottom: 12px;
  }
}

`

const Slide = styled.div`
  position: relative;
  height: calc(100vh - 80px);

  [data-pin-log="button_pinit"] {
    position: absolute !important;
    top: 25px;
    left: 50px;
    transform: scale(1.2);
    z-index: 10;

    @media screen and (max-width:860px) {
      top: 2.5rem;
      left: 2rem;
    }
  }
`

export const query = graphql`
  query($slug: String!) {
    project: sanityProjectPage(slug: { current: { eq: $slug } }) {
        title
        _rawMetadata2
        _rawDescription2
        tags2 {
          es
          en
        }
        seo {
          title2 {
            es
            en
          }
          description2 {
            es
            en
          }
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