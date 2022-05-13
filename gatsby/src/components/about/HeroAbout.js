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
    padding-top: 150px;
    padding-bottom: 150px;
    padding-left: 50px;
    padding-right: 50px;
    text-align: center;
    .texto {
        max-width: 770px;
        margin: 0 auto;
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