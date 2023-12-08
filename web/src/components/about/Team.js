import React, { useRef } from 'react'
import styled from 'styled-components'
import BlockContent from '@sanity/block-content-to-react';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Slider from "react-slick"
import scrollTo from 'gatsby-plugin-smoothscroll';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { localize } from "../../utils/helpers";

function NextArrow(props) {
    const { className, onClick } = props;
  
    return (
      <div
        className={className}
        onClick={onClick}
      >
        <svg width="27" height="20" viewBox="0 0 27 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_47_1168)">
          <path d="M2.28839e-06 10H25.7759" stroke="#FFF" strokeWidth="2" strokeMiterlimit="10"/>
          <path d="M16.5141 19.3677L25.7759 10L16.5141 0.632324" stroke="#FFF" strokeWidth="2" strokeMiterlimit="10"/>
          </g>
          <defs>
          <clipPath id="clip0_47_1168">
            <rect width="27" height="20" fill="white" transform="matrix(-1 0 0 1 27 0)"/>
          </clipPath>
          </defs>
        </svg>
      </div>
    );
  }
  
  function PrevArrow(props) {
    const { className, onClick } = props;
    return (
      <div
        className={className}
        onClick={onClick}
      >
        <svg width="27" height="20" viewBox="0 0 27 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_47_1245)">
          <path d="M27 10H1.22412" stroke="#FFF" strokeWidth="2" strokeMiterlimit="10"/>
          <path d="M10.4859 19.3677L1.22412 10L10.4859 0.632324" stroke="#FFF" strokeWidth="2" strokeMiterlimit="10"/>
          </g>
          <defs>
          <clipPath id="clip0_47_1245">
            <rect width="27" height="20" fill="white"/>
          </clipPath>
          </defs>
        </svg>
      </div>
    );
  }

const Team = ({ data, language }) => {
    const text = localize(data.sanityAboutPage._rawOurTeamText2, [language])
    const top = localize(data.sanityAboutPage._rawToTop, [language])
    const sliderRef = useRef(null);

    const settings = {
        dots: false,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        waitForAnimate: true,
        speed: 500,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        ref: sliderRef,
      };


    return(
        <>
            <TeamContainer id='team'>
                <div className='text'>
                    <BlockContent
                            blocks={text}
                    /> 
                </div>
                <div className='team'>
                {data.sanityAboutPage.team.map(({ _key, name, position2, image}, i) => {
                    const bgGetDataImage = getImage(image.asset)
                    const bgGetDataImageAlt = image.alt || ""
                        return (
                            <div className='member' key={_key} data-sal="fade"
                            data-sal-delay={i * 50}
                            data-sal-duration="500"
                            data-sal-easing="ease">
                                <div className='image'>
                                    <GatsbyImage
                                        style={{ height: "100%", width: "100%", pointerEvents: "none" }}
                                        image={bgGetDataImage}
                                        alt={bgGetDataImageAlt}
                                    />
                                </div>
                                <div className='overlay'>
                                    <div className='text'>
                                        <h2>{name}</h2>
                                        <div className='line'></div>
                                        <h3><strong>{position2.translate}</strong></h3>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className='team teamMobile'>
                    <Slider {...settings}>
                    {data.sanityAboutPage.team.map(({ _key, name, position2, image}, i) => {
                        const bgGetDataImage = getImage(image.asset)
                        const bgGetDataImageAlt = image.alt || ""
                            return (
                                <div className='member' key={_key}>
                                    <div className='image'>
                                        <GatsbyImage
                                            style={{ height: "auto", width: "100%", pointerEvents: "none" }}
                                            image={bgGetDataImage}
                                            alt={bgGetDataImageAlt}
                                        />
                                    </div>
                                    <div className='text'>
                                        <h2>{name}</h2>
                                        <div className='line'></div>
                                        <h3><strong>{position2.translate}</strong></h3>
                                    </div>
                                </div>
                            );
                        })}
                    </Slider>
                    <div className='arrows'>
                    </div>
                </div>
                <div className='more'>
                    <button onClick={() => scrollTo('#home')} >
                        <BlockContent
                            blocks={top}
                        />
                    </button>
                </div>
            </TeamContainer>
        </>
    )
}

const TeamContainer = styled.section`
background-color: var(--black);
position: relative;

@media (max-width: 680px) {
    padding-top: 0;
    padding-bottom: 2rem;
}
    .text {
        background-color: var(--black);
        color: var(--white);
        text-align: center;
        padding: 1.5rem;
        p {
            font-size: 1.4rem;
            @media (max-width: 680px) {
                font-size: 6vw;
            }
        }

        em {
            color: var(--blue);
        }
        .line {
            width: 20px;
            height: 3px;
            background-color: var(--blue);
            margin: 5px auto 3px;
        }
    }
    .team {
        background-color: black;
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-gap: 5px;
        background-color: var(--black);
        @media (max-width: 680px) {
            grid-template-columns: repeat(1, 1fr);
            display: none;
        }
        .member {
            position: relative;
            .image {
                display: block;
                img {
                    transform: translateY(1px);
                    transform: scale(1.05);
                }
                @media (max-width: 680px) {
                    margin-bottom: 1rem;
                }
            }
            &:hover {
                .overlay {
                    opacity: 1;
                }
            }
            .overlay {
                transition: opacity 0.25s ease;
                position: absolute;
                top: 0;
                left: 0;
                bottom: 0;
                right: 0;
                background-color: var(--black);
                display: flex;
                justify-content: center;
                flex-direction: column;
                padding: 10px;
                opacity: 0;
                @media (max-width: 680px) {
                    opacity: 1;
                    position: static;
                    h2 {
                        font-size: 1.5rem;
                        max-width: 100% !important;
                        width: 100% !important;
                        margin-bottom: 5px !important;
                    }
                    .line {
                        display: none;
                    }
                }
                h2 {
                    font-size: 2rem;
                    margin: 0 auto 20px;
                    font-weight: normal;
                    max-width: 155px;
                    text-align: center;
                }
                .line {
                    width: 20px;
                    height: 3px;
                    background-color: var(--blue);
                    margin: 0 auto 15px;
                }
                strong {
                    font-weight: normal;
                    font-family: var(--plain);
                }
            }
        }
    }

    .teamMobile {
        display: none;
        @media screen and (max-width: 680px) {
            display: block;
            padding: 0 3.5rem;
        }

        .slick-next:before, .slick-prev:before {
            display: none;
        }

        .slick-arrow {
            transform: translateY(15rem);
        }

        .slick-disabled {
            opacity: 0;
            pointer-events: none;
        }
    }
    .more {
        background-color: var(--black);
        font-size: 1.2rem;
        font-weight: normal;
        text-align: center;
        width: 100%;
        color: var(--white);
        padding: 25px 10px;
        button {
            background-color: var(--blue);
            padding: 5px 15px;
            border-radius: 50px;
            color: var(--white);
            transition: all 0.25s ease;
            cursor: pointer;
            &:hover {
                background-color: var(--white);
                color: var(--blue);
            }
        }
    }
`

export default Team
