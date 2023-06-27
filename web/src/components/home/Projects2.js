import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Projects2 = ({data}) => {
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
                                <div className='top'>
                                    <div className='project project1'>
                                        <Link to={`/work/${project1.slug.current}`}>
                                            <GatsbyImage
                                                style={{ height: "100%", width: "100%" }}
                                                image={bgGetDataImage1}
                                                alt={bgGetDataImageAlt1}
                                            />
                                        </Link>
                                    </div>
                                </div>
                                <div className='bot'>
                                    <div className='project project2'>
                                        <Link to={`/work/${project2.slug.current}`}>
                                            <GatsbyImage
                                                style={{ height: "100%", width: "100%" }}
                                                image={bgGetDataImage2}
                                                alt={bgGetDataImageAlt2}
                                            />
                                        </Link>
                                    </div>
                                    <div className='project project3'>
                                        <Link to={`/work/${project3.slug.current}`}>
                                            <GatsbyImage
                                                style={{ height: "100%", width: "100%" }}
                                                image={bgGetDataImage3}
                                                alt={bgGetDataImageAlt3}
                                            />
                                        </Link>
                                    </div>
                                </div>
                                
                            </div>
                            <div className='de'>
                                <div className='top'>
                                    <div className='project project4'>
                                        <Link to={`/work/${project4.slug.current}`}>
                                            <GatsbyImage
                                                style={{ height: "100%", width: "100%" }}
                                                image={bgGetDataImage4}
                                                alt={bgGetDataImageAlt4}
                                            />
                                        </Link>
                                    </div>
                                    <div className='project project5'>
                                        <Link to={`/work/${project5.slug.current}`}>
                                            <GatsbyImage
                                                style={{ height: "100%", width: "100%" }}
                                                image={bgGetDataImage5}
                                                alt={bgGetDataImageAlt5}
                                            />
                                        </Link>
                                    </div>
                                </div>
                                <div className='bot'>
                                    
                                    <div className='project project6'>
                                        <Link to={`/work/${project6.slug.current}`}>
                                            <GatsbyImage
                                                style={{ height: "100%", width: "100%" }}
                                                image={bgGetDataImage6}
                                                alt={bgGetDataImageAlt6}
                                            />
                                        </Link>
                                    </div>
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
        }
    .iz {
        width: 50%;
        .top {
            width: 100%;
            .project {
                height: 350px;
            }
        }
        .bot {
            display: flex;
            flex-direction: row;
            width: 100%;
            .project {
                width: 50%;
                height: 250px;
                padding: 0;
            }
        }
    }
    .de {
        width: 50%;
        .top {
            display: flex;
            width: 100%;
            .project {
                width: 50%;
                height: 250px;
            }
        }
        .bot {
            width: 100%;
            .project {
                height: 350px;
            }
        }
    }
    }

}
`

export default Projects2