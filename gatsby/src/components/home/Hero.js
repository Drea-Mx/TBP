import React from 'react'
import { Link } from "gatsby";
import styled from 'styled-components'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Hero = ({data}) => {
    const bgGetDataImage = getImage(data.sanityHomePage.heroBackgroundImage.asset)
    const bgGetDataImageAlt = data.sanityHomePage.heroBackgroundImage.altEn
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
                <h1>{data.sanityHomePage.heroTexto}</h1>
            </div>
            <div className='logo'>
                <img src='/tbp_logotype_a.svg' alt='Logo TBP' />
            </div>
            <div className='arrow'>
                <Link to='#about'>
                    <img src='/Arrow.svg' alt='Arrow scroll down' />
                </Link>
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
                width: 100%;
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
    .arrow {
        position: absolute;
        bottom: 50px;
        left: 50%;
        transform: translateX(-50%);
        z-index: 0;
        animation-name: arrow ;
        animation-duration: 1.5s;
        animation-timing-function: ease-in-out;
        animation-iteration-count: infinite;
        animation-fill-mode: forwards;
        @media (max-width: 680px) {
            bottom: 100px;
            animation-name: arrowM ;
        }
        img {
            width: 20px;
        }
    }
    @keyframes arrow {
        0% {
            bottom: 50px
        }
        50% {
            bottom: 70px;
        }
        100% {
            bottom: 50px;
        }
    }
    @keyframes arrowM {
        0% {
            bottom: 100px;
        }
        50% {
            bottom: 120px;
        }
        100% {
            bottom: 100px;
        }
    }

`

export default Hero