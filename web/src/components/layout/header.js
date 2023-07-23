import React, { useState, useEffect, useContext } from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import { AlternateLinksContext } from '../wrapWithI18nProvider'

const Header = ({ language }) => {

    const alternateLinks = useContext(AlternateLinksContext);
    const { i18n } = useTranslation();

    const data = useStaticQuery(graphql`
    query {
        sanityGlobalPage {
            whiteLogo {
                alt
                asset {
                    url
                }
            }
            blueLogo {
                alt
                asset {
                    url
                }
            }
            menu {
                es
                en
            }
        }
    }
    `);


const HeaderContainer = styled.header`
    position: fixed;
    z-index: 1;
    display: flex;
    width: 100vw;
    justify-content: space-between;
    align-items: center;
    padding: 20px 50px;
    background-color: white;
    @media (max-width: 680px) {
        height: 80px;
        z-index: 1;
        padding-left: 0;
        padding-right: 0;
    }
    .ham {
        display: none;
    }
        @media (max-width: 680px) {
            .ham.work {
                display: none !important;
            }
            .ham {
                display: block;
                position: absolute;
                top: 28px;
                left: 20px;
                width: 30px;
                height: 30px;
                z-index: 2;
                .line {
                    position: relative;
                    height: 2px;
                    width: 100%;
                    background-color: black;
                    margin-bottom: 10px;
                    transition: all 200ms ease-in-out;
                }
            }
            .clicked {
                .line {
                    &:nth-child(1){
                        transform: rotate(45deg);
                        top: 6px;
                    }
                    &:nth-child(2){
                        display: none;
                    }
                    &:nth-child(3){
                        transform: rotate(-45deg);
                        bottom: 6px;
                    }
                }
            }
        }
    
    .logo {
        width: 60px;
        @media (max-width: 680px) {
            position: absolute;
            right: 20px;
            top: 32px;
        }
    }
    .logo.workProj {
        @media (max-width: 680px) {
            a {
                display: none;
            }
        }
    }
    .logo.active {
        a {
            display: none;
        }
    }

    .logo .whiteLogo {
        filter: brightness(0) invert(1);
    }
    
    .links {
        display: flex;
        a.active {
            color: var(--blue) !important;
        }
        .hideDesk {
            display: none;
        }
        @media (max-width: 680px) {
            position: absolute;
            top: 0;
            left: 100%;
            height: 100vh;
            width: 100vw;
            right: 0;
            background-color: var(--black);
            flex-direction: column;
            justify-content: center;
            align-items: center;
            z-index: 9;
            text-align: center;
            .hideDesk {
                display: block;
            }
            .close {
                position: absolute;
                top: 25px;
                left: 20px;
                z-index: 3;
                button {
                    width: 50px;
                    height: 50px;
                    img {
                    width: 25px;
                    }
                }
            }
            li {
                margin-bottom: 40px;
                margin-left: 0 !important;
                a {
                    font-size: 2rem !important;
                    text-align: center;
                }
            }
        }
        li {
            margin-left: 50px;
            a {
                font-family: var(--plain);
                color: var(--black);
                font-size: 1.1rem; 
                @media (max-width: 680px) {
                    color: white;
                }
                &:hover {
                    color: var(--blue);
                }
            }
        }
    }
    .links.blue {
        li {
            a {
                color: var(--black);
                @media (max-width: 680px) {
                    color: var(--white);
                }
                &:hover {
                    color: var(--blue);
                }
            }
        }
    }
    .open {
        left: 0;
    }
`

const [clickHam, setClickHam] = useState(false);


const [small, setSmall] = useState(false);

useEffect(() => {
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () =>
      setSmall(window.pageYOffset > 20)
    );
  }
}, []);

    return(
        <HeaderContainer id='header' className={small ? 'true' : 'false'}>
            <button className={clickHam ? 'ham clicked'  : 'ham'} onClick={() => setClickHam(!clickHam)}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </button>
            <div className='logo'>
                    <Link to={`/${i18n.language}`}>
                        <img src={data.sanityGlobalPage.blueLogo.asset.url} alt={data.sanityGlobalPage.whiteLogo.alt} />
                    </Link>
            </div>
                <ul className={clickHam ? 'links open' : 'links'}>
                    <div className="close hideDesk">
                        <button onClick={() => setClickHam(!clickHam)}>
                            <img src="/Close_ page_ X.png" alt='Close Page' />
                        </button>
                    </div>
                    <li className='hideDesk'><Link to={`/${i18n.language}`} activeClassName="active" onClick={() => setClickHam(clickHam === false)}>{data.sanityGlobalPage.menu[0][language]}</Link></li>
                    <li><Link to={`/${i18n.language}/about`} activeClassName="active"  onClick={() => setClickHam(clickHam === false)}>{data.sanityGlobalPage.menu[1][language]}</Link></li>
                    <li className='work'><Link to={`/${i18n.language}/work`} activeClassName="active" onClick={() => setClickHam(clickHam === false)}>{data.sanityGlobalPage.menu[2][language]}</Link></li>
                    <li><Link to={`/${i18n.language}/blog`} activeClassName="active" onClick={() => setClickHam(clickHam === false)}>{data.sanityGlobalPage.menu[3][language]}</Link></li>
                    <li><Link to={`/${i18n.language}/contact`} activeClassName="active" onClick={() => setClickHam(clickHam === false)}>{data.sanityGlobalPage.menu[4][language]}</Link></li>
                    {alternateLinks?.filter(link => link.language !== i18n.language)
                        .map((link, i) => [
                            i > 0 && " | ",
                            <li><Link
                            key={i}
                                className="underline language-link"
                                to={link.path}
                                hrefLang={link.language}
                            >
                                {link.language === 'en' ? 'En' : 'Es'}
                            </Link></li>,
                        ])
                    }
                </ul>
        </HeaderContainer>
    )
}

export default Header
