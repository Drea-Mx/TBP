import React from 'react'
import styled from 'styled-components'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from 'gatsby'



const ThankYou = ({data}) => {

    const bgGetDataImage = getImage(data.sanityContactPage.image.asset)
    const bgGetDataImageAlt = data.sanityContactPage.image.alt

    const mp4 = data.sanityContactPage.videoMp4.asset.url
    const webm = data.sanityContactPage.videoWebm.asset.url

    return(
        <FormContainer>
            <div className='iz'>
                <div className='arriba'>
                    <strong>Thank You!</strong>
                    <div className='line'></div>
                </div>
                <h1>We will <br />get back  <br /><em>to you soon.</em></h1>
                <div className='abajo'>
                    <Link to="/">
                        <img src="/Close_ page_ X.png" alt='Close Page' />
                    </Link>
                </div>
            </div>
            <div className='de'>
                <div className='video'>
                    <video muted loop autoPlay poster={data.sanityContactPage.image.asset.url}>
                    <source src={webm} type="video/webm" />
                    <source src={mp4} type="video/mp4" />
                </video>
                </div>
                <div className='image'>
                    <GatsbyImage
                        style={{ height: "100%", width: "100%" }}
                        image={bgGetDataImage}
                        alt={bgGetDataImageAlt}
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
    h1 {
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
    .image {
        display: none;
    }
    .video {
        line-height: 0;
        video {
            width: 100%    !important;
            height: auto   !important;
        }
    }
    @media (max-width: 680px) {
            width: 100%;
        }
}
`

export default ThankYou 