import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Projects = ({data}) => {
    return(
        <ProjectsContainer>
            <div className='text'>
                <h2>Our most recent <em>projects.</em> </h2>
                {/* <div className='line'></div> */}
            </div>
            <div className='projects'>
                {data.sanityHomePage.projects.map(({ _key, project1, project2, project3, project4, project5, project6 }) => {
                            const bgGetDataImage1 = getImage(project1.thumbnail.asset)
                            const bgGetDataImageAlt1 = project1.thumbnail.alt
                            
                            const bgGetDataImage2 = getImage(project2.thumbnail.asset)
                            const bgGetDataImageAlt2 = project2.thumbnail.alt

                            const bgGetDataImage3 = getImage(project3.thumbnail.asset)
                            const bgGetDataImageAlt3 = project3.thumbnail.alt

                            
                            const bgGetDataImage4 = getImage(project4.thumbnail.asset)
                            const bgGetDataImageAlt4 = project4.thumbnail.alt

                            
                            const bgGetDataImage5 = getImage(project5.thumbnail.asset)
                            const bgGetDataImageAlt5 = project5.thumbnail.alt

                            
                            const bgGetDataImage6 = getImage(project6.thumbnail.asset)
                            const bgGetDataImageAlt6 = project6.thumbnail.alt

                            
                    return (
                        <div className='row' key={_key}>
                            <div className='iz'>
                                <div className='project project1'>
                                    <Link to={`/work/${project1.slug.current}`}>
                                        <div className='image'>
                                            <GatsbyImage
                                                style={{ height: "100%", width: "100%" }}
                                                image={bgGetDataImage1}
                                                alt={bgGetDataImageAlt1}
                                            />
                                        </div>
                                        <div className='overlay'>
                                            <h3>{project1.title}</h3>
                                        </div>
                                    </Link>
                                </div>
                                <div className='project project2'>
                                    <Link to={`/work/${project2.slug.current}`}>
                                        <div className='image'>
                                            <GatsbyImage
                                                style={{ height: "100%", width: "100%" }}
                                                image={bgGetDataImage2}
                                                alt={bgGetDataImageAlt2}
                                            />
                                        </div>
                                        <div className='overlay'>
                                            <h3>{project2.title}</h3>
                                        </div>
                                        
                                    </Link>
                                </div>
                                <div className='project project3'>
                                    <Link to={`/work/${project3.slug.current}`}>
                                        <div className='image'>
                                            <GatsbyImage
                                                style={{ height: "100%", width: "100%" }}
                                                image={bgGetDataImage3}
                                                alt={bgGetDataImageAlt3}
                                            />
                                        </div>
                                        <div className='overlay'>
                                            <h3>{project3.title}</h3>
                                        </div>
                                        
                                    </Link>
                                </div>
                            </div>
                            <div className='de'>
                                <div className='project project4'>
                                    <Link to={`/work/${project4.slug.current}`}>
                                        <div className='image'>
                                            <GatsbyImage
                                                style={{ height: "100%", width: "100%" }}
                                                image={bgGetDataImage4}
                                                alt={bgGetDataImageAlt4}
                                            />
                                        </div>
                                        <div className='overlay'>
                                            <h3>{project4.title}</h3>
                                        </div>
                                        
                                    </Link>
                                </div>
                                <div className='project project5'>
                                    <Link to={`/work/${project5.slug.current}`}>
                                        <div className='image'>
                                            <GatsbyImage
                                                style={{ height: "100%", width: "100%" }}
                                                image={bgGetDataImage5}
                                                alt={bgGetDataImageAlt5}
                                            />
                                        </div>
                                        <div className='overlay'>
                                            <h3>{project5.title}</h3>
                                        </div>
                                        
                                    </Link>
                                </div>
                                <div className='project project6'>
                                    <Link to={`/work/${project6.slug.current}`}>
                                        <div className='image'>
                                            <GatsbyImage
                                                style={{ height: "100%", width: "100%" }}
                                                image={bgGetDataImage6}
                                                alt={bgGetDataImageAlt6}
                                            />
                                        </div>
                                        <div className='overlay'>
                                            <h3>{project6.title}</h3>
                                        </div>
                                        
                                    </Link>
                                </div>
                            </div>
                            
                        </div>
                    );
                })}
            </div>
            <div className='text'>
                <Link to='/work'><strong>More</strong> <em>projects</em></Link>
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
        padding: 25px 10px;
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
        }
        .line {
            width: 20px;
            height: 3px;
            background-color: var(--blue);
            margin: 0 auto;
        }
    }
.projects {
    .row {
        display: flex;
        border-bottom: solid 5px var(--black);
        @media (max-width: 680px) {
            flex-direction: column;
        }
    .project {
        position: relative;
        overflow: hidden;
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
                h3 {
                    color: var(--white);
                    font-size: 2rem;
                    font-weight: normal;
                    font-family: var(--reg);
                }
            }
    }
    .iz {
        width: 50%;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        border-right: solid 7px var(--black);
        @media (max-width: 680px) {
            grid-template-columns: repeat(1, 1fr);
            width: 100%;
            border-left: none !important;
            border-right: none !important;
            .project {
                grid-column: auto !important;
                grid-row: auto !important;
                border-bottom: solid 5px var(--black) !important;
                border-left: none !important;
                border-right: none !important;
                height: 400px !important;
            }
        }
        .project1 {
            grid-column: 1/3;
            grid-row: 1/2;
            border-bottom: solid 5px var(--black);
            height: 400px;
            position: relative;
            overflow: hidden;
            
            @media (max-width: 680px) {
                
            }
        }
        .project2 {
            grid-column: 1/2;
            grid-row: 2/3;
            border-right: solid 5px var(--black);
            height: 250px;
            position: relative;
        }
        .project3 {
            grid-column: 2/3;
            grid-row: 2/3;
            height: 250px;
        }
    }
    .de {
        width: 50%;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        @media (max-width: 680px) {
            grid-template-columns: repeat(1, 1fr);
            width: 100%;
            .project {
                grid-column: auto !important;
                grid-row: auto !important;
                border-bottom: solid 5px var(--black) !important;
                border-left: none !important;
                border-right: none !important;
                height: 400px !important;
            }
        }
        .project4 {
            grid-column: 1/2;
            grid-row: 1/2;
            border-bottom: solid 5px var(--black);
            border-right: solid 5px var(--black);
            height: 250px;

        }
        .project5 {
            grid-column: 2/3;
            grid-row: 1/2;
            border-bottom: solid 5px var(--black);
            height: 250px;
        }
        .project6 {
            grid-column: 1/3;
            grid-row: 2/3;
            height: 400px;
        }
    }
    }

}
`

export default Projects