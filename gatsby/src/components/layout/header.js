import React from 'react'
import { useStaticQuery, graphql, Link } from "gatsby";
import styled from 'styled-components'

const Header = () => {

    const data = useStaticQuery(graphql`
    query {
        sanityGlobalPage {
            whiteLogo {
                alt
                asset {
                    url
                }
            }
        }
    }
    `);


    return(
        <HeaderContainer>
            <div className='logo'>
                <img src={data.sanityGlobalPage.whiteLogo.asset.url} alt={data.sanityGlobalPage.whiteLogo.alt} />
            </div>
            <ul className='links'>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/work'>Work</Link></li>
                <li><Link to='/blog'>Blog</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
            </ul>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.header`
    position: fixed;
    z-index: 1;
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 50px;
    .logo {
        width: 70px;
    }
    .links {
        display: flex;
        li {
            margin-left: 35px;
            a {
                font-family: var(--plain);
                color: var(--white);
                font-size: 1.1rem;
                &:hover {
                    color: var(--blue);
                }
            }
        }
    }
`

export default Header