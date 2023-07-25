import React from 'react'
import styled from 'styled-components'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { localize } from '../../utils/helpers'
import BlockContent from '@sanity/block-content-to-react';
import Vimeo from '@u-wave/react-vimeo';
import { FORM } from '../../utils/constants';

const FormContact = ({ data, language }) => {
    const bgGetDataImage = getImage(data.sanityContactPage.image.asset)
    const bgGetDataImageAlt = data.sanityContactPage.image.alt

    const heading = localize(data.sanityContactPage._rawHeadline2, [language])

    return(
        <FormContainer>
            <div className='iz'>
                <h1 data-sal="fade"
  data-sal-delay="200"
  data-sal-duration="500"
  data-sal-easing="ease">
                    <BlockContent
                        blocks={heading}
                    />
                </h1>
                <form
                    name="Form Contact"
                    action="/thank-you"
                    method="POST"
                    data-netlify="true"
                    netlify-honeypot="bot-field"
                >
                    <input type="hidden" name="form-name" value="Form Contact" />
                    <p class="hidden">
                        <label>
                        Don't fill this out if you're human: <input name="bot-field" />
                        </label>
                    </p>
                    <input type='text' name='name' placeholder={FORM.name[language]} required />
                    <input type='email' name='email' placeholder={FORM.email[language]} required />
                    <textarea name='message' placeholder={FORM.help[language]} required />
                    <select name="commingFrom" id="grado" required>
                        <option value="how">{FORM.hear[language]}</option>
                        <option value="google">Google</option>
                        <option value="behance">Behance</option>
                        <option value="instagramFacebook">Instagram / Facebook</option>
                        <option value="friend">{FORM.friend[language]}</option>
                        <option value="other">{FORM.other[language]}</option>
                    </select>
                    <button type='submit'>{FORM.submit[language]}</button>
                </form>
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
                        video={data.sanityContactPage.video}
                        autoplay
                        muted
                        playsInline
                        background
                        controls={false}
                        loop
                        responsive
                    />
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
.hidden {
    position: absolute;
    visibility: hidden;
}
.iz {
    width: 35%;
    background-color: var(--black);
    color: var(--white);
    padding: 50px 20px 50px 50px;
    @media (max-width: 680px) {
            width: 100%;
            padding: 50px;
        }
    h1 {
        font-weight: normal;
        font-size: 4.5vw;
        line-height: 0.85;
        @media (max-width: 680px) {
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
        @media (max-width: 680px) {
            height: auto;
        }
        input, textarea, select {
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
        select {
            option {
                background: var(--blue);
                color: white;
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

export default FormContact 