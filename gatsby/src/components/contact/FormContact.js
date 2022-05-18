import React from 'react'
import styled from 'styled-components'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import BlockContent from '@sanity/block-content-to-react';



const FormContact = ({data}) => {

    const bgGetDataImage = getImage(data.sanityContactPage.image.asset)
    const bgGetDataImageAlt = data.sanityContactPage.image.alt


    return(
        <FormContainer>
            <div className='iz'>
                <h1>Let us <br />be part of <br /><em>your project.</em></h1>
                <form netlify>
                    <input type='text' name='name' placeholder='Name' />
                    <input type='email' name='email' placeholder='Email' />
                    <textarea name='message' placeholder='Business inquiries' ></textarea>
                    <button type='submit'>Submit.</button>
                </form>
            </div>
            <div className='de'>
                <GatsbyImage
                    style={{ height: "100%", width: "100%" }}
                    image={bgGetDataImage}
                    alt={bgGetDataImageAlt}
                />
            </div>
        </FormContainer>
    )
}

const FormContainer = styled.section`
display: flex;
padding-top: 70px;
.iz {
    width: 30%;
    background-color: var(--black);
    color: var(--white);
    padding: 50px;
    h1 {
        font-weight: normal;
        font-size: 3rem;
    }
    form {
        width: 100%;
        margin: 100px auto;
        height: 50px;
        display: flex;
        flex-direction: column;
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
    width: 70%;
}
`

export default FormContact 