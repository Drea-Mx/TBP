import React from 'react'
import styled from 'styled-components'
import BlockContent from '@sanity/block-content-to-react';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from 'gatsby'

const Team = ( {data} ) => {
    return(
        <TeamContainer>
            <div className='text'>
                <BlockContent
                        blocks={data.sanityAboutPage._rawOurTeamText}
                /> 
                <div className='line'></div>
            </div>
            <div className='team'>
            {data.sanityAboutPage.team.map(({ _key, name, position, image}) => {
                            const bgGetDataImage = getImage(image.asset)
                            const bgGetDataImageAlt = image.alt
                            
                    return (
                        <div className='member' key={_key}>
                            <div className='image'>
                                <GatsbyImage
                                    style={{ height: "100%", width: "100%" }}
                                    image={bgGetDataImage}
                                    alt={bgGetDataImageAlt}
                                />
                            </div>
                            <div className='overlay'>
                                <div className='text'>
                                    <h2>{name}</h2>
                                    <div className='line'></div>
                                    <h3><strong>{position}</strong></h3>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className='more'>
                <Link to='/about#home'><em>Back</em> to top</Link>
            </div>
        </TeamContainer>
    )
}

const TeamContainer = styled.section`
background-color: var(--black);
    .text {
        background-color: var(--black);
        color: var(--white);
        text-align: center;
        padding: 15px;
        p {
            font-size: 1.2rem;
        }
        .line {
            width: 20px;
            height: 3px;
            background-color: var(--blue);
            margin: 5px auto 3px;
        }
    }
    .team {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-gap: 5px;
        .member {
            position: relative;
            &:hover {
                .overlay {
                    opacity: 1;
                }
            }
            .overlay {
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
                h2 {
                    font-size: 2rem;
                    margin: 0 auto;
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
    .more {
        background-color: var(--black);
        font-size: 1.2rem;
        font-weight: normal;
        text-align: center;
        width: 100%;
        color: var(--white);
        padding: 25px 10px;
        a {
            background-color: var(--blue);
            padding: 5px 15px;
            border-radius: 5px;
            color: var(--white);
        }
    }
`

export default Team