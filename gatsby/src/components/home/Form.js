import React from 'react'
import styled from 'styled-components'

const Form = () => {
    return(
        <FormContainer id='formularioHome'>
            <div className='text'>
                <h3>Let us be part of <em>your project.</em></h3>
                <div className='line'></div>
            </div>
            <form 
                name="Form Home" 
                method="POST" 
                data-netlify="true"
                action="/thank-you"
            >
                <input type="hidden" name="form-name" value="Form Home" />
                <input type='text' name='name' placeholder='Name' />
                <input type='email' name='email' placeholder='Email' />
                <textarea name='message' placeholder='How can we help you?' ></textarea>
                <select name="grado" id="grado">
                    <option value="how">How did you hear about us?</option>
                    <option value="google">Google</option>
                    <option value="behance">Behance</option>
                    <option value="instagramFacebook">Instagram / Facebook</option>
                    <option value="friend">Recomendation of a friend</option>
                    <option value="other">Other</option>
                </select>
                <button type='submit'>Submit</button>
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
        }

    }
`

export default Form