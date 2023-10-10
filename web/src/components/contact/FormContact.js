import React, { useState, useRef, useEffect  } from 'react'
import styled from 'styled-components'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { localize } from '../../utils/helpers'
import BlockContent from '@sanity/block-content-to-react';
import Vimeo from '@u-wave/react-vimeo';
import { FORM } from '../../utils/constants';
import Recaptcha from "react-google-recaptcha";
import { navigate } from 'gatsby'

const RECAPTCHA_KEY = process.env.SITE_RECAPTCHA_KEY || "aqwswe";

function encode(data) {
  const formData = new URLSearchParams();

  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      formData.append(key, data[key]);
    }
  }

  return formData.toString();
}

const FormContact = ({ data, language }) => {
  const bgGetDataImage = getImage(data.sanityContactPage.image.asset)
  const bgGetDataImageAlt = data.sanityContactPage.image.alt || ""

  const heading = localize(data.sanityContactPage._rawHeadline2, [language])
  const [captcha, setCaptcha] = useState(null);
  const [siteURL, setSiteURL] = useState(null);
  const recaptchaRef = useRef();

  const [state, setState] = useState({})

  useEffect(() => {
    if (typeof window !== "undefined") {
      setSiteURL(window.location.href);
    }
  });

  const handleInputChange = e => {
      setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleRecaptcha = value => {
      setCaptcha(value);
  };

  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    const recaptchaValue = recaptchaRef.current.getValue()
    
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        'g-recaptcha-response': recaptchaValue,
        ...state,
      }),
    })
    .then(() => navigate(`/${[language]}${form.getAttribute('action')}`))
    .catch(error => alert(error))
  }

  return(
      <FormContainer>
        <div className='iz'>
          <h1
            data-sal="fade"
            data-sal-delay="200"
            data-sal-duration="500"
            data-sal-easing="ease"
          >
            <BlockContent
               blocks={heading}
            />
          </h1>
          <form
            name="Form Contact"
            action="/thank-you"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            data-netlify-recaptcha="true"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="form-name" value="Form Contact" />
            <p className="hidden">
              <label>
                Don't fill this out if you're human: <input name="bot-field" />
              </label>
            </p>
            <input
              type='text'
              name='name'
              placeholder={FORM.name[language]}
              required
              value={state.name}
              onChange={handleInputChange}
            />
            <input
              type='email'
              name='email'
              placeholder={FORM.email[language]}
              required
              value={state.email}
              onChange={handleInputChange}
            />
            <textarea
              name='message'
              placeholder={FORM.help[language]}
              required
              value={state.message}
              onChange={handleInputChange}
            />
            <select
              name="comingFrom"
              required
              value={state.comingFrom}
              onChange={handleInputChange}
            >
              <option value="how">{FORM.hear[language]}</option>
              <option value="google">Google</option>
              <option value="behance">Behance</option>
              <option value="instagramFacebook">Instagram / Facebook</option>
              <option value="friend">{FORM.friend[language]}</option>
              <option value="other">{FORM.other[language]}</option>
            </select>
            <input
              className="hidden"
              type='text'
              name='siteURL'
              value={siteURL}
            />
            <div style={{marginTop: "1rem"}}>
              <Recaptcha
                required
                ref={recaptchaRef}
                sitekey={RECAPTCHA_KEY}
                onChange={handleRecaptcha}
              />
              <button type='submit'>{FORM.submit[language]}</button>
            </div>
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
@media (max-width: 820px) {
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
    @media (max-width: 820px) {
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
        @media (max-width: 820px) {
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
            border-radius: 50px;
            transition: all 0.25s ease;
            &:hover {
                background-color: var(--white);
                color: var(--blue);
            }
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
    @media (max-width: 820px) {
            width: 100%;

            .video iframe {
                transform: scale(1.025);
            }
        }
}
`

export default FormContact 
