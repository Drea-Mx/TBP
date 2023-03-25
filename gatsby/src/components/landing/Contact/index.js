import React, { useState } from 'react'
import BlockContent from '@sanity/block-content-to-react'
import * as S from './styles'

const ContactLanding = ({ heading, successHeading, successText }) => {
  const [submitted, setSubmit] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const myForm = event.target;
    const formData = new FormData(myForm);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => setSubmit(true))
      .catch((error) => alert(error));
  };

  return(
    <S.Container id="landingForm">
      <div className={submitted ? 'success submitted' : 'success'}>
        <p className='thanks'>{successHeading}</p>
        <div className='separator' />
        <BlockContent blocks={successText} />
        <button onClick={() => setSubmit(false)}>
          <img src='/Close_ page_ X.png' alt="close button" />
        </button>
      </div>
      <div className='heading'>
        <BlockContent blocks={heading} />
        <div className='separator' />
      </div>
      <S.Form
        autoComplete='off'
        name="Form Contact Landing"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="form-name" value="Form Contact Landing" />
        <input type='hidden' name="bot-field" />

        <input type='text' name='name' placeholder='Nombre' required/>
        <input type='email' name='email' placeholder='Correo' required/>
        <textarea name='message' placeholder='¿Cómo te podemos ayudar?' required></textarea>
        <select name="commingFrom" required>
          <option value="how">¿Cómo escuchaste sobre nosotros?</option>
          <option value="google">Google</option>
          <option value="behance">Behance</option>
          <option value="instagramFacebook">Instagram / Facebook</option>
          <option value="friend">Recomendación de un amigo</option>
          <option value="other">Otro</option>
        </select>
        <button type='submit'>Enviar</button>
      </S.Form>
    </S.Container>
  )
}

export default ContactLanding
