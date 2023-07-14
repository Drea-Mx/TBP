import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { localize } from '../../utils/helpers'
import BlockContent from '@sanity/block-content-to-react';

const Projects = ({ data, language }) => {
    const localizedData = localize(data.sanityHomePage, [language])

    return(
        <ProjectsContainer>
            <div className='text'>
                <h2>
                    <BlockContent
                         blocks={localizedData._rawRecent}
                    />
                </h2>
            </div>
            <div className='projects'>
                {data.allSanityProjectPage.edges.map(({ node }) => {
                    const bgGetDataImage = getImage(node.thumbnail.asset)
                    const bgGetDataImageAlt = node.thumbnail.alt
                        return (
                            <div className='project project1'>
                                <Link to={`/work/${node.slug.current}`}>
                                    <div className='image'>
                                        <GatsbyImage
                                            style={{ height: "100%", width: "100%" }}
                                            image={bgGetDataImage}
                                            alt={bgGetDataImageAlt}
                                        />
                                    </div>
                                    <div className='overlay'>
                                        <h3>{node.title}</h3>
                                    </div>
                                </Link>
                            </div>
                        );
                    })}
            </div>
            <div className='text'>
                <Link to='/work'>
                    <BlockContent
                         blocks={localizedData._rawRecentCta}
                    />
                </Link>
            </div>
        </ProjectsContainer>
    )
}

const ProjectsContainer = styled.section`
background-color: var(--black);
    h2 {
        background-color: var(--black);
        font-size: 1.2rem;
        font-weight: normal;
        text-align: center;
        width: 100%;
        color: var(--white);
        padding: 15px;
        @media (max-width: 680px) {
            font-size: 6vw;
        }
    }
    .text {
        background-color: var(--black);
        font-size: 1.2rem;
        font-weight: normal;
        text-align: center;
        width: 100%;
        color: var(--white);
        padding: 25px 10px 31px;
        h2 {
            font-size: 1.4rem;
        }
        strong {
            font-weight: normal;
            font-family: var(--reg);
            @media (max-width: 680px) {
                font-weight: normal;
                font-family: var(--bold);
            }
        }
        a {
            background-color: var(--blue);
            padding: 5px 15px;
            border-radius: 5px;
            color: var(--white);
            p {
                display: inline;
            }
        }
        .line {
            width: 20px;
            height: 3px;
            background-color: var(--blue);
            margin: 0 auto;
        }
    }
.projects {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    width: 100%;
    height: auto;
    @media (max-width: 680px) {
        grid-template-columns: 1fr;
    }
    .project {
        width: 100%;
        position: relative;
        overflow: hidden;
        @media (max-width: 680px) {
                border-bottom: solid 5px black;
            }
        &:first-child {
            border-right: solid 5px black;
            border-bottom: solid 5px black;
            @media (max-width: 680px) {
                border-right: none;
            }
        }
        &:nth-child(2) {
            border-right: solid 5px black;
            border-bottom: solid 5px black;
            @media (max-width: 680px) {
                border-right: none;
            }
        }
        &:nth-child(3) {
            border-bottom: solid 5px black;
            @media (max-width: 680px) {
                border-right: none;
            }
        }
        &:nth-child(4) {
            border-right: solid 5px black;
            @media (max-width: 680px) {
                border-right: none;
            }
        }
        &:nth-child(5) {
            border-right: solid 5px black;
            @media (max-width: 680px) {
                border-right: none;
            }
        }
        .image {
                height: 100%;
                transform: scale(1.2);
            }
            &:hover {
                .overlay {
                    top: 0;
                }
            }
            .overlay {
                background-color: black;
                position: absolute;
                top: 100%;
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: center;
                flex-direction: column;
                align-content: center;
                text-align: center;
                @media (max-width: 680px) {
                        display: none;
                    }
                h3 {
                    color: var(--white);
                    font-size: 2rem;
                    font-weight: normal;
                    font-family: var(--reg);
                }
            }
    }
}
`

export default Projects