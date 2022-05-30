import React from 'react'
import styled from 'styled-components'
import BlockContent from '@sanity/block-content-to-react';

const HeroAbout = ({data}) => {
    return(
        <HeroAboutContainer id='home'>
            <div className='texto'>
                <BlockContent
                    blocks={data.sanityAboutPage._rawDescription}
                /> 
                
            </div>
        </HeroAboutContainer>
    )
}


const HeroAboutContainer = styled.section`
    height: 100vh;
    padding-left: 50px;
    padding-right: 50px;
    text-align: center;
    position: relative;
    @media (max-width: 680px) {
        height: auto;
        padding-bottom: 50px;
        padding-top: 150px;
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
        @media (max-width: 680px) {
            position: static;
            transform: none;
        }
        i, em {
            color: var(--blue);
        }
        p {
            font-size: 2rem;
            margin-bottom: 30px;
            
        }
    }
`
export default HeroAbout