import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const ProjectsWork = ({data}) => {
    return(
        <ProjectsContainer id='home'>
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
            <div className='more'>
                <Link to='/work#home'><em>Back</em> to top</Link>
            </div>
        </ProjectsContainer>
    )
}

const ProjectsContainer = styled.section`
padding-top: 70px;
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
    grid-template-columns: 1fr 1fr;
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
        border: solid 3px black;
        @media (max-width: 680px) {
            border: solid 3px black;
        }
            &:nth-child(odd) {
                border-left: 0;
                @media (max-width: 680px) {
                    border-right: 0;
                }
            }
            &:nth-child(even) {
                border-right: 0;
                @media (max-width: 680px) {
                    border-left: 0;
                }
            }
            &:nth-child(1) {
                border-top: 0;
            }
            &:nth-child(2) {
                border-top: 0;
                @media (max-width: 680px) {
                    border: solid 3px black;
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
    a {
        background-color: var(--blue);
        padding: 5px 15px;
        border-radius: 5px;
        color: var(--white);
    }
}
`

export default ProjectsWork