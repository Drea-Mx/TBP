import React from 'react'
import styled from 'styled-components'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import scrollTo from 'gatsby-plugin-smoothscroll';
import BlockContent from '@sanity/block-content-to-react';
import { localize } from '../../utils/helpers';

const Hero = ({ data, language }) => {
    const bgGetDataImage = getImage(data.heroBackgroundImage.asset)
    const bgGetDataImageAlt = data.heroBackgroundImage.altEn
    const cta = localize(data._rawCta, [language])
    return(
        <HeroContainer>
            <div className='image'>
                <GatsbyImage
                    style={{ height: "100%", width: "100%" }}
                    image={bgGetDataImage}
                    alt={bgGetDataImageAlt}
                />
            </div>
            <div className='lead'>
                <h1>{data.heroTexto}</h1>
            </div>
            <div className='logo'>
                <img src='/tbp_logotype_a.svg' alt='Logo TBP' />
            </div>
            <a className='formularioHome' href='#formularioHome'>
                <BlockContent
                    blocks={cta}
                />
            </a>
            <div className='arrow'>
                <button onClick={() => scrollTo('#about')}>
                    <img src='/Arrow.svg' alt='Arrow scroll down' />
                </button>
            </div>
        </HeroContainer>
    )
}

const HeroContainer = styled.section`
    position: relative;
    .image {
        height: 100vh;
    }
    .logo {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 35%;
        @media (max-width: 680px) {
                width: 95%;
            }
        img {
            width: 100%;
            filter: invert(100%);
            @media (max-width: 680px) {
                font-size: 8vw;
            }
        }
    }
    .lead {
        position: absolute;
        z-index: -1;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        @media (max-width: 680px) {
                width: 100%;
            }
        h1 {            
            font-family: var(--bold);
            color: var(--white);
            text-align: center;
            font-weight: normal;
            font-size: 2.5rem;
            @media (max-width: 680px) {
                font-size: 8vw;
            }
        }
    }
    .formularioHome {
        font-size: 1.2rem;
        position: absolute;
        left: 50%;
        bottom: 80px;
        transform: translateX(-50%);
        z-index: 0;
        background-color: black;
        color: white;
        padding: 10px 15px;
        border-radius: 6px;
        transition: background-color 0.25s ease;

        &:hover {
            background-color: var(--blue);
        }
        @media (max-width: 680px) {
            bottom: 100px;
        }
        span {
            font-family: var(--serif);
        }
    }
    .arrow {
        position: absolute;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        z-index: 0;
        animation-name: arrow ;
        animation-duration: 1s;
        animation-timing-function: ease-in-out;
        animation-iteration-count: infinite;
        animation-fill-mode: forwards;
        @media (max-width: 680px) {
            bottom: 20px;
            animation-name: arrowM ;
        }
        img {
            width: 20px;
        }
    }
    @keyframes arrow {
        0% {
            bottom: 20px
        }
        50% {
            bottom: 30px;
        }
        100% {
            bottom: 20px;
        }
    }
    @keyframes arrowM {
        0% {
            bottom: 30px;
        }
        50% {
            bottom: 40px;
        }
        100% {
            bottom: 30px;
        }
    }

`

export default Hero