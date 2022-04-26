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
    .lead {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        h1 {
            font-family: var(--bold);
            color: var(--white);
            text-align: center;
            font-weight: normal;
            font-size: 2.5rem;
        }
    }
    .arrow {
        position: absolute;
        bottom: 50px;
        left: 50%;
        transform: translateX(-50%);
        z-index: 1;
        animation-name: arrow ;
        animation-duration: 1.5s;
        animation-timing-function: ease-in-out;
        animation-iteration-count: infinite;
        animation-fill-mode: forwards;
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

`

export default Hero