import React from 'react'
import styled from 'styled-components'
import BlockContent from '@sanity/block-content-to-react';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import scrollTo from 'gatsby-plugin-smoothscroll';
import { localize } from "../../utils/helpers";

const Team = ({ data, language }) => {
    const text = localize(data.sanityAboutPage._rawOurTeamText2, [language])
    const top = localize(data.sanityAboutPage._rawToTop, [language])
    const teampic = data.sanityAboutPage.teamImage.asset.url

    console.log('data.sanityAboutPage', data.sanityAboutPage)
    return(
        <>
            <TeamPic>
                <img src={teampic} alt="The Branding People" />
            </TeamPic>
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
                                        style={{ height: "100%", width: "100%" }}
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
                    display: none;
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

const TeamPic = styled.div`
    width: 100%;
    height: auto;
    aspect-ratio: 1534 / 914;
    position: sticky;
    top: 0;
    background-color: var(--black);

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

export default Team
