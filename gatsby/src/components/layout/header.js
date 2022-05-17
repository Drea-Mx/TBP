import React from 'react'
import { useStaticQuery, graphql, Link } from "gatsby";
import styled from 'styled-components'

const Header = ({black, work}) => {

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
        }
    }
    `);


    return(
        <HeaderContainer id='header'>
            <div className={work === true ? 'work logo' : 'logo'}>
                {black 
                    ? 
                    <Link to='/' >
                        <img src={data.sanityGlobalPage.blueLogo.asset.url} alt={data.sanityGlobalPage.whiteLogo.alt} />
                    </Link>
                    :
                    <Link to='/' >
                        <img src={data.sanityGlobalPage.whiteLogo.asset.url} alt={data.sanityGlobalPage.whiteLogo.alt} />
                    </Link>
                }
            </div>
            {black 
                ? 
                <ul className='links blue'>
                    <li><Link to='/about' activeStyle={{color: "#0044FF" }}>About</Link></li>
                    <li className={work === true ? 'work' : ''}><Link to='/work' activeStyle={{color: "#0044FF" }}>Work</Link></li>
                    <li><Link to='/blog' activeStyle={{color: "#0044FF" }}>Blog</Link></li>
                    <li><Link to='/contact' activeStyle={{color: "#0044FF" }}>Contact</Link></li>
                </ul>
                :
                <ul className='links'>
                    <li><Link to='/about'>About</Link></li>
                    <li className='work'><Link to='/work'>Work</Link></li>
                    <li><Link to='/blog'>Blog</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                </ul>
            }
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
    padding: 20px 50px;
    .logo {
        width: 60px;
    }
    .logo.work {
        a {
            display: none;
        }
    }
    .links {
        display: flex;
        .work {
            a {
                color: var(--blue);
            }
        }
        li {
            margin-left: 50px;
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
    .links.blue {
        li {
            a {
                color: var(--black);
                &:hover {
                    color: var(--blue);
                }
            }
        }
    }
`

export default Header