import React from 'react'
import styled from 'styled-components'
import BlockContent from '@sanity/block-content-to-react';
import { localize } from "../../utils/helpers";

const HeroAbout = ({ data, language }) => {
    const text = localize(data.sanityAboutPage._rawDescription2, [language])

    return(
        <HeroAboutContainer id='home'>
            <div className='texto' data-sal="fade"
  data-sal-duration="500"
  data-sal-easing="ease">
                <BlockContent
                    blocks={text}
                />
            </div>
        </HeroAboutContainer>
    )
}


const HeroAboutContainer = styled.section`
    height: calc(100vh - 7.5rem);
    padding-left: 50px;
    padding-right: 50px;
    text-align: center;
    position: relative;
    @media (max-width: 680px) {
        height: auto;
        min-height: 85vh;
        display: flex;
        align-items: center;
        padding: 8rem 2rem 4rem;
    }
    .texto {
        max-width: 770px;
        width: 100%;
        margin: 0 auto;
        align-self: center;
        justify-self: center;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        @media (max-width: 768px) {
            padding: 2rem;
        }
        @media (max-width: 680px) {
            position: static;
            transform: none;
            padding: 0;
        }
        i, em {
            color: var(--blue);
        }
        p {
            font-size: 2rem;
            margin-bottom: 30px;
            
        }

        @media (max-width: 768px) {
            p {
                font-size: 1.5rem;
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
            display: none;
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
`
export default HeroAbout