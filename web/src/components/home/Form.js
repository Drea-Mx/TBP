import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import { localize } from '../../utils/helpers'
import BlockContent from '@sanity/block-content-to-react';
import { FORM } from '../../utils/constants';
import { navigate } from 'gatsby'
import Recaptcha from "react-google-recaptcha";

const RECAPTCHA_KEY = process.env.SITE_RECAPTCHA_KEY;

function encode(data) {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
}

const Form = ({ data, language }) => {
    const title = localize(data, [language])
    const [captcha, setCaptcha] = useState(null);
    const recaptchaRef = useRef();

    const handleRecaptcha = value => {
        setCaptcha(value);
    };

    const [state, setState] = useState({})

    const handleInputChange = e => {
        setState({ ...state, [e.target.name]: e.target.value })
    }

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
        .then(() => navigate(`/${[language]}/${form.getAttribute('action')}`))
        .catch(error => alert(error))
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
                <div>
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
        align-items: flex-end;
        justify-content: space-between;
        height: 50px;
        @media (max-width: 680px) {
            flex-direction: column;
            height: auto;
            input, textarea, select {
                width: 100% !important;
                margin-bottom: 20px;
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
            width: 20%;
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

    }
`

export default Form