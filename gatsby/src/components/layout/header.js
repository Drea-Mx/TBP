import React, { useState, useEffect } from "react";
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
            blueLogo {
                alt
                asset {
                    url
                }
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
        height: 100px;
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
                top: 30px;
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
            top: 50px;
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
                    <Link to='/'>
                        <img src={data.sanityGlobalPage.blueLogo.asset.url} alt={data.sanityGlobalPage.whiteLogo.alt} />
                    </Link>
            </div>
                <ul className={clickHam ? 'links open' : 'links'}>
                    <div className="close hideDesk">
                        <button onClick={() => setClickHam(!clickHam)}>
                            <img src="/Close_ page_ X.png" alt='Close Page' />
                        </button>
                    </div>
                    <li className='hideDesk'><Link to='/' activeClassName="active" onClick={() => setClickHam(clickHam === false)}>Home</Link></li>
                    <li><Link to='/about' activeClassName="active"  onClick={() => setClickHam(clickHam === false)}>About</Link></li>
                    <li className='work'><Link to='/work' activeClassName="active" onClick={() => setClickHam(clickHam === false)}>Work</Link></li>
                    <li><Link to='/blog' activeClassName="active" onClick={() => setClickHam(clickHam === false)}>Blog</Link></li>
                    <li><Link to='/contact' activeClassName="active" onClick={() => setClickHam(clickHam === false)}>Contact</Link></li>
                </ul>
        </HeaderContainer>
    )
}



export default Header