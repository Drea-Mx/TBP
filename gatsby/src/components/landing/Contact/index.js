import React from 'react'
import BlockContent from '@sanity/block-content-to-react'
import * as S from './styles'

const ContactLanding = ({ heading }) => {
  return(
    <S.Container>
      <div className='heading'>
        <BlockContent blocks={heading} />
        <div className='separator' />
      </div>
      <S.Form
        name="Form Contact Landing"
        action="/thank-you"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="Form Contact Landing" />
        <input type='hidden' name="bot-field" />

        <input type='text' name='name' placeholder='Nombre' />
        <input type='email' name='email' placeholder='Correo' />
        <textarea name='message' placeholder='¿Cómo te podemos ayudar?'></textarea>
        <select name="commingFrom">
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
