import React, { useEffect } from 'react';
import styled from 'styled-components'
import { useStaticQuery, graphql } from "gatsby";

const Footer = ({blog, language="es"}) => {

    const data = useStaticQuery(graphql`
    query Footer {
        sanityGlobalPage {
            mail
            copyright2 {
                es
                en
            }
            termsTitle {
                es
                en
            }
            terms {
                asset {
                    url
                }
            }
            termsCondTitle {
                es
                en
            }
            termsCond {
                asset {
                    url
                }
            }
            disclaimerTitle {
                es
                en
            }
            disclaimer {
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


useEffect(() => {
    // Carga dinámica del script de Iubenda
    const script = document.createElement("script");
    script.src = "https://cdn.iubenda.com/iubenda.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Limpia el script al desmontar el componente
      const existingScript = document.querySelector('script[src="https://cdn.iubenda.com/iubenda.js"]');
      if (existingScript) existingScript.remove();
    };
  }, []);




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
                            <p>{data.sanityGlobalPage.copyright2[language]}</p>
                            <a href={data.sanityGlobalPage.terms.asset.url} rel="noreferrer" target='_blank'>{data.sanityGlobalPage.termsTitle[language]}</a>
                            <a href={data.sanityGlobalPage.disclaimer.asset.url} rel="noreferrer" target='_blank'>{data.sanityGlobalPage.disclaimerTitle[language]}</a>
                            <a href={data.sanityGlobalPage.termsCond.asset.url} rel="noreferrer" target='_blank'>{data.sanityGlobalPage.termsCondTitle[language]}</a>
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
                    <div className="policy">
                        {/* Política de Privacidad */}
                        <a
                        href="https://www.iubenda.com/privacy-policy/62417021"
                        className="iubenda-white iubenda-noiframe iubenda-embed iub-legal-only"
                        title="Política de Privacidad"
                        >
                        Política de Privacidad
                        </a>
                        {/* Política de Cookies */}
                        <a
                        href="https://www.iubenda.com/privacy-policy/62417021/cookie-policy"
                        className="iubenda-white iubenda-noiframe iubenda-embed iubenda-legal-only"
                        title="Política de Cookies"
                        >
                        Política de Cookies
                        </a>
                        {/* Términos y Condiciones */}
                        <a
                        href="https://www.iubenda.com/condiciones-de-uso/62417021"
                        className="iubenda-white iubenda-noiframe iubenda-embed iub-legal-only"
                        title="Términos y Condiciones"
                        >
                        Términos y Condiciones
                        </a>
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
        flex-wrap: wrap;
        gap: 1rem;
        margin-bottom: 50px;
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
                display: flex;
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
                    &:not(:last-child) {
                        margin-right: 20px;
                    }
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
