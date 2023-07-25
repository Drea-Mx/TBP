import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import BlockContent from '@sanity/block-content-to-react';
import scrollTo from 'gatsby-plugin-smoothscroll';
import { localize } from "../../utils/helpers";

const ProjectsWork = ({ data, language, projects }) => {
    const top = localize(data.sanityWorkPage._rawToTop, [language])
    return(
        <ProjectsContainer id='home'>
            <div className='projects'>
            {projects.map(({ node }, i) => {
                const bgGetDataImage = getImage(node.thumbnail.asset)
                const bgGetDataImageAlt = node.thumbnail.alt
                    return (
                        <div className='project project1' data-sal="fade"
                        data-sal-delay={i * 100}
                        data-sal-duration="500"
                        data-sal-easing="ease">
                            <Link to={`/${language}/${node.slug.current}`}>
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
            <div className='more'>
                <button onClick={() => scrollTo('#home')} >
                    <BlockContent
                        blocks={top}
                    />
                </button>
            </div>
        </ProjectsContainer>
    )
}

const ProjectsContainer = styled.section`
@media (max-width: 680px) {
    padding-top: 80px;
}
    h2 {
        background-color: var(--black);
        font-size: 1.2rem;
        font-weight: normal;
        text-align: center;
        width: 100%;
        color: var(--white);
        padding: 15px;
    }
    .text {
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
    .projects {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    width: 100%;
    height: auto;
    background-color: var(--black);
    border-top: none;
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
        &:nth-child(3n - 2) {
            border-right: solid 5px black;
            border-bottom: solid 5px black;
            @media (max-width: 680px) {
                border-right: none;
            }
        }
        &:nth-child(3n - 1) {
            border-right: solid 5px black;
            border-bottom: solid 5px black;
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
            border-radius: 5px;
            color: var(--white);
        }
    }
`

export default ProjectsWork