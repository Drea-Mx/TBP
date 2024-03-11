import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import BlockContent from "@sanity/block-content-to-react"
import { localize } from '../../utils/helpers'
import Vimeo from '@u-wave/react-vimeo';
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const ThankYou = ({ data, language="es" }) => {
    const heading = localize(data.sanityGlobalPage.thankYou._rawHeading, [language])
    return(
        <FormContainer>
            <div className='iz'>
                <div className='arriba'>
                    <strong>{data.sanityGlobalPage.thankYou.eyebrow.translate}</strong>
                    <div className='line'></div>
                </div>
                <h1>
                    <BlockContent
                        blocks={heading}
                    />
                </h1>
                <div className='abajo'>
                    <Link to={`/${language}`}>
                        <img src="/Close_ page_ X.png" alt='Close Page' />
                    </Link>
                </div>
            </div>
            <div className='de'>
                <div className='video'>
                    <GatsbyImage
                        className='thumbnail'
                        style={{ height: "100%", width: "100%", position: 'absolute' }}
                        image={getImage(data.sanityContactPage.image.asset)}
                        alt="video thumbnail"
                    />
                    <Vimeo
                        video={data.sanityGlobalPage.thankYou.video}
                        autoplay
                        muted
                        playsInline
                        background
                        controls={false}
                        loop
                        responsive
                    />
                </div>
            </div>
        </FormContainer>
    )
}

const FormContainer = styled.section`
display: flex;
padding-top: 70px;
@media (max-width: 680px) {
    flex-direction: column;
    padding-top: 80px;
}
.iz {
    width: 35%;
    background-color: var(--black);
    color: var(--white);
    padding: 50px 20px 50px 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media (max-width: 680px) {
            width: 100%;
            padding: 50px;
        }
    .arriba {
        strong {
            font-family: var(--plain);
            font-size: 0.8rem;
            @media (max-width: 680px) {
                font-size: 1rem;
            }
        }
        .line {
            width: 25px;
            height: 3px;
            background-color: var(--blue);
            margin: 20px 0;
        }
    }
    .abajo {
        img {
            width: 20px;
        }
    }
    h1, h2, h3 {
        font-weight: normal;
        font-size: 4.5vw;
        line-height: 0.85;
        margin-bottom: 100px;
        @media (max-width: 680px) {
            margin-top: 50px;
            font-size: 13vw;
        }
    }
    form {
        width: 100%;
        margin: 100px auto;
        height: 50px;
        display: flex;
        flex-direction: column;
        padding-right: 30px;
        input, textarea {
            background: none;
            border-top: none;
            border-left: none;
            border-right: none;
            border-bottom: solid 1px var(--blue);
            width: 100%;
            margin-bottom: 10px;
            color: var(--white);
            padding: 5px;
            outline: none;
            &::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
                color: rgba(255, 255, 255, 0.3);
            }

            &:-ms-input-placeholder { /* Internet Explorer 10-11 */
                color: rgba(255, 255, 255, 0.3);
            }

            &::-ms-input-placeholder { /* Microsoft Edge */
                color: rgba(255, 255, 255, 0.3);
            }
        }
        textarea {
            padding-bottom: 24px;
        }
        button {
            background-color: var(--blue);
            width: 85px;
            margin-top: 20px;
            padding: 5px 10px;
            color: var(--white);
            display: block;
            height: 35px;
            border-radius: 5px;
        }

    }
}
.de {
    width: 65%;
    height: auto;
    aspect-ratio: 982.797 / 746.727;
    .image {
        display: none;
    }
    .video {
        width: 100%    !important;
        height: 100%  !important;
        position: relative;

        div[data-vimeo-initialized="true"] {
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            /* z-index: 2; */
        }
    }
    @media (max-width: 680px) {
            width: 100%;
        }
}
`

export default ThankYou 