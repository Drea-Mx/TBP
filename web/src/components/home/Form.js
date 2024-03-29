import React, { useRef, useState, useEffect } from 'react'
import styled from 'styled-components'
import { localize } from '../../utils/helpers'
import BlockContent from '@sanity/block-content-to-react';
import { FORM } from '../../utils/constants';
import { navigate } from 'gatsby'
import Recaptcha from "react-google-recaptcha";

const RECAPTCHA_KEY = process.env.SITE_RECAPTCHA_KEY || "efwgwegw";

const Form = ({ data, language, contact }) => {
    const title = localize(data, [language])
    const [captcha, setCaptcha] = useState(null);
    const recaptchaRef = useRef();

    const [siteURL, setSiteURL] = useState(null);

    useEffect(() => {
        if (typeof window !== "undefined") {
            setSiteURL(window.location.href);
        }
    });

    const handleRecaptcha = value => {
        setCaptcha(value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        const form = e.target
        const recaptchaValue = recaptchaRef.current.getValue()
        const formData = new FormData(form);
        formData.append('g-recaptcha-response', recaptchaValue);
        formData.append("siteURL", siteURL);

        try {
          const response = await fetch('/', {
            method: 'POST',
            body: formData,
          });
          if (response.ok) {
            navigate(`/${[language]}${form.getAttribute('action')}`)
          } else {
            throw new Error('Error en la solicitud');
          }
        } catch (error) {
          alert(error.message);
        }
      }

    return(
        <FormContainer id='formularioHome'>
          <div className='text' data-sal="fade"
          data-sal-duration="500"
          data-sal-easing="ease">
              <h3>
                  <BlockContent
                        blocks={title}
                  />
              </h3>
              <div className='line'></div>
          </div>
            <form
              name="Form Home"
              action="/thank-you"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              data-netlify-recaptcha="true"
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="form-name" value="Form Home" />
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
              />
              <input
                type='email'
                name='email'
                placeholder={FORM.email[language]}
                required
              />
              <select
                name="services"
                required
              >
                <option value="" selected disabled hidden>{FORM.help[language]}</option>
                {contact.services?.map((serv, i) => (
                  <option key={`serv-form-sidebar-${i}`} value={serv[language]}>{serv.translate}</option>
                ))}
              </select>
              <select
                name="industry"
                required
              >
                <option value="" selected disabled hidden>{FORM.industry[language]}</option>
                {contact.industries?.map((ind, i) => (
                  <option key={`ind-form-sidebar-${i}`} value={ind[language]}>{ind.translate}</option>
                ))}
              </select>
              <select
                name="comingFrom"
                required
              >
                <option value="" selected disabled hidden>{FORM.hear[language]}</option>
                {contact.how?.map((how, i) => (
                  <option key={`how-form-sidebar-${i}`} value={how[language]}>{how.translate}</option>
                ))}
              </select>
              <select
                name="location"
                required
              >
                <option value="" selected disabled hidden>{FORM.location[language]}</option>
                {contact.locations?.map((loc, i) => (
                  <option key={`loc-form-sidebar-${i}`} value={loc[language]}>{loc.translate}</option>
                ))}
              </select>
                <div className='recaptcha'>
                    <Recaptcha
                        required
                        ref={recaptchaRef}
                        sitekey={RECAPTCHA_KEY}
                        onChange={handleRecaptcha}
                    />
                    <button type='submit'>{FORM.submit[language]}</button>
                </div>
            </form>
        </FormContainer>
    )
}

const FormContainer = styled.section`
background-color: var(--blue);
padding: 50px;
text-align: center;
@media (max-width: 680px) {
    padding: 50px 20px;
}
.hidden {
    position: absolute;
    visibility: hidden;
}
    .text {
        h3 {
            color: var(--white);
            font-size: 1.5rem;
            font-weight: normal;
        }
        .line {
            height: 3px;
            width: 15px;
            background-color: var(--black);
            margin: 20px auto 30px;
        }
    }
    form {
        width: 100%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1.5rem;
        @media (max-width: 680px) {
            flex-direction: column;
            height: auto;
            input, textarea, select {
                width: 100% !important;
                margin-bottom: 20px;

                &::placeholder {
                    color: white;
                }
            }
            textarea {
                padding-bottom: 25px !important;
            }
            button {
                align-self: center;
                margin-top: 20px;
                padding-top: 5px;
                padding-bottom: 5px;
                width: 100px !important;
            }
        }
        select {
            option {
                background: black;
            }
        }
        input, textarea, select {
            background: none;
            border-top: none;
            border-left: none;
            border-right: none;
            border-bottom: solid 1px var(--black);
            height: 30px;
            width: 300px;
            color: var(--white);
            padding: 5px;
            outline: none;
            &::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
                color: rgba(255, 255, 255, 1);
            }

            &:-ms-input-placeholder { /* Internet Explorer 10-11 */
                color: rgba(255, 255, 255, 0.3);
            }

            &::-ms-input-placeholder { /* Microsoft Edge */
                color: rgba(255, 255, 255, 0.3);
            }
        }
        button {
            background-color: var(--black);
            width: 85px;
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

        .recaptcha {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 1rem;
        }

    }
`

export default Form
