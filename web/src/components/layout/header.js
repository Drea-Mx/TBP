import React, { useState, useEffect, useContext } from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import { AlternateLinksContext } from '../wrapWithI18nProvider'
import { localize } from "../../utils/helpers";
import BlockContent from '@sanity/block-content-to-react';
import SidebarForm from "./sidebarForm";

const Header = ({ language }) => {

    useEffect(() => {
        const handleEsc = (event) => {
           if (event.keyCode === 27) {
            setOpenContact(false)
          }
        };
        window.addEventListener('keydown', handleEsc);

        return () => {
          window.removeEventListener('keydown', handleEsc);
        };
      }, []);

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
            _rawHeaderButton
            thankYou {
                eyebrow {
                  es
                  en
                }
                _rawHeading
            }
            whatsapp
        }
        contact: sanityContactPage {
            _rawSidebarHeadline
            locations {
                es
                en
            }
            how {
                es
                en
            }
            services {
                es
                en
            }
            industries {
                es
                en
            }
        }
    }
    `);

const [clickHam, setClickHam] = useState(false);
const [openContact, setOpenContact] = useState(false);


const [small, setSmall] = useState(false);

useEffect(() => {
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () =>
      setSmall(window.scrollY > 20)
    );
  }
}, []);

const button = localize(data.sanityGlobalPage._rawHeaderButton, [language])

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
                            <li key={`lan-link-${link.language}`}><Link
                                className="underline language-link"
                                to={link.path}
                                hrefLang={link.language}
                            >
                                {link.language === 'en' ? 'En' : 'Es'}
                            </Link></li>,
                        ])
                    }
                <StyledButton className="workButton" onClick={() => setOpenContact(!openContact)}>
                    <BlockContent
                        blocks={button}
                    />
                </StyledButton>
                </ul>
                <StyledBackground className={openContact ? 'open' : ''}>
                    <StyledSidebar className={openContact ? 'openContact' : ''}>
                        <div className="closeContainer">
                            <button onClick={() => setOpenContact(!openContact)}>
                                <img src="/Close_ page_ X.png" alt='Close Page' />
                            </button>
                        </div>
                        <SidebarForm language={language} contact={data.contact} thankYou={data.sanityGlobalPage.thankYou} />
                    </StyledSidebar>
                </StyledBackground>
                <div className="whatsapp" style={{position: "fixed", right: "1.5rem", bottom: "1.5rem", cursor: "pointer"}}>
                    <a href={data.sanityGlobalPage.whatsapp} target="_blank">
                        <img src="/whatsapp.png" alt="WhatsApp" width={60} height={60} />
                    </a>
                </div>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.header`
    position: fixed;
    z-index: 1;
    display: flex;
    width: 100vw;
    justify-content: space-between;
    align-items: center;
    padding: 20px 50px;
    background-color: white;

    .whatsapp {
        width: 60px;
        height: 60px;
    }
    @media (max-width: 680px) {
        height: 80px;
        z-index: 20;
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
                transition: color 0.25s ease;
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
                transition: color 0.25s ease;
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

    ul {
        display: flex;
        align-items: center;
    }
`

const StyledButton = styled.button`
    background-color: var(--blue);
    color: var(--white);
    font-size: 1.2rem;
    padding: 8px 24px;
    border-radius: 50px;
    transition: background-color 0.25s ease;
    margin-left: 2rem;

    &:hover {
        background-color: var(--black);
    }

    @media (max-width: 680px) {
        margin: 0;
        /* display: none; */

        &.buttonFixed {
            position: fixed;
            bottom: 1.75rem;
            left: 50%;
            transform: translateX(-50%);
            margin: 0;
        }
    }
`

const StyledSidebar = styled.div`
    background-color: var(--black);
    width: 38vw;
    height: 100vh;
    position: fixed;
    right: 0;
    top: 0;
    transform: translateX(38vw);
    transition: transform 500ms ease;
    padding: 5rem 4rem;

    .hidden {
        position: absolute;
        visibility: hidden;
    }

    &.openContact {
        transform: translateX(0);
    }

    .closeContainer {
        width: 100%;
        display: flex;
        justify-content: flex-end;
        position: relative;
        z-index: 3;

        button {
            width: 1.25rem;
            height: 1.25rem;
            transition: transform 300ms;

            &:hover {
                transform: scale(1.15);
            }
        }
    }

    .heading {
        margin-bottom: 3rem;

        h2 {
            color: var(--white);
            font-size: 3.75rem;
            font-weight: normal;
            line-height: 1;

            em {
                color: var(--blue);
            }
        }
    }

    input, textarea, select {
        width: 100%;
        display: block;
        padding: 0.5rem;
        border: none;
        border-bottom: 1px solid var(--blue);
        color: var(--white);
        font-size: 1rem;
        background-color: transparent;
        margin-bottom: 0.75rem;
        outline: none;

        &::placeholder {
            color: var(--white);
        }

        &:-ms-input-placeholder { /* Internet Explorer 10-11 */
            color: var(--white);
        }

        &::-ms-input-placeholder { /* Microsoft Edge */
            color: var(--white);
        }

        option {
            background: var(--blue);
            color: white;
        }
    }

    form button {
        background-color: var(--blue);
        width: 85px;
        margin-top: 2rem;
        padding: 5px 10px;
        color: var(--white);
        display: block;
        height: 35px;
        border-radius: 50px;
        transition: all 0.25s ease;
        &:hover {
            background-color: var(--white);
            color: var(--blue);
        }
    }

    @media screen and (max-width: 680px){
        padding: 4rem 2.5rem;
        width: 100vw;
        transform: translateX(100vw);
        z-index: 9;
        overflow: scroll;

        .heading {
            margin-bottom: 1.5rem;

            h2 {
                font-size: 3rem;
            }
        }
    }

    @media screen and (max-height: 670px) {
        padding: 2rem;
        overflow: scroll;

        .heading h2 {
            font-size: 2rem;
        }
    }
`

const StyledBackground = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.75);
    z-index: 10;
    opacity: 0;
    pointer-events: none;
    transition: opacity 400ms ease;

    &.open {
        opacity: 1;
        pointer-events: all;
    }
`

export default Header
