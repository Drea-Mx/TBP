import React from 'react'
import styled from 'styled-components'
import { localize } from '../../utils/helpers'
import BlockContent from '@sanity/block-content-to-react';
import { FORM } from '../../utils/constants';

const Form = ({ data, language }) => {
    const title = localize(data, [language])

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
                netlify-honeypot="bot-field"
            >
                <input type="hidden" name="form-name" value="Form Home" />
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
            border-radius: 6px;
            transition: all 0.25s ease;
            &:hover {
                background-color: var(--white);
                color: var(--blue);
            }
        }

    }
`

export default Form