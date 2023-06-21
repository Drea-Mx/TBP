import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql, Link } from "gatsby";

const Footer = ({blog}) => {

    const data = useStaticQuery(graphql`
    query {
        sanityGlobalPage {
            mail
            copyright
            terms {
                asset {
                    url
                }
            }
            linksSocialMedia {
                _key
                text
                url
            }
        }
    }
    `);


    return(
        <FooterContainer>
            {blog === true ? 
            '' 
        :
        <div>
            <div className='mail'>
                <a rel="noreferrer" href={`mailto:${data.sanityGlobalPage.mail}`}>{data.sanityGlobalPage.mail}</a>
                <div className='line'></div>
            </div>
            <div className='bot'>
                <div className='iz'>
                    <p>{data.sanityGlobalPage.copyright}</p>
                    <a href={data.sanityGlobalPage.terms.asset.url} rel="noreferrer" target='_blank'>Privacy Policy.</a>
                    <Link to='/disclaimer'>Disclaimer. </Link>
                </div>
                <div className='de'>
                    <ul>
                        {data.sanityGlobalPage.linksSocialMedia.map(({ _key, text, url }) => {
                                return (
                                    <li
                                        key={_key}
                                        className='slide'
                                    >
                                        <a href={url} rel="noreferrer" target='_blank'>{text}</a>
                                    </li>
                                );
                        })}
                    </ul>
                </div>
            </div>
        </div>  
        }
            
            
        </FooterContainer>
    )
}

const FooterContainer = styled.footer`
    padding: 50px;
    @media (max-width: 680px) {
        padding: 50px 20px;
    }
    .mail {
        padding-bottom: 70px;
        a {
            font-family: var(--plain);
            color: var(--black);
            font-size: 1rem;
        }
        .line {
            height: 3px;
            width: 15px;
            background-color: var(--blue);
            margin: 20px 0;
        }
    }
    .bot {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        @media (max-width: 650px) {
                flex-direction: column;
                justify-content: space-around;
                .iz {
                    width: 100%;
                    flex-direction: row;
                    p {
                        display: inline;
                    }
                }
            }
        .iz {
            display: flex;
            @media (max-width: 750px) {
                display: block;
                flex-direction: column;
                p {
                    margin-bottom: 20px;
                }
                a {
                    margin-bottom: 20px;
                }
            }
            p {
                margin-right: 20px;
                font-size: 0.87rem;
            }
            a {
                margin-right: 20px;
                font-size: 0.87rem;
                color: var(--black);
            }
        }
        .de {
            @media (max-width: 680px) {
                margin-top: 20px;
                align-self: flex-start;
            }
            ul {
                display: flex;
                @media (max-width: 680px) {
                    display: block;
                    li {
                        display: inline-block;
                    }
                }
                li {
                    margin-left: 20px;
                    @media (max-width: 680px) {
                        margin-left: 0;
                        margin-right: 20px;
                    }
                    a {
                        color: var(--black);
                        font-size: 0.87rem;
                        font-family: var(--plain);
                    }
                }
            }
        }
    }
`

export default Footer