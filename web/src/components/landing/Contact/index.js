import React, { useRef, useState, useEffect } from "react";
import Recaptcha from "react-google-recaptcha";
import BlockContent from '@sanity/block-content-to-react'
import * as S from './styles'
import { navigate } from "gatsby";

const RECAPTCHA_KEY = process.env.SITE_RECAPTCHA_KEY || "resdef";

const ContactLanding = ({ heading, successHeading, successText }) => {
  const [submitted, setSubmit] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [how, setHow] = useState("");
  const [captcha, setCaptcha] = useState(null);
  const recaptchaRef = useRef();
  const [siteURL, setSiteURL] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setSiteURL(window.location.href);
      console.log('siteURL', siteURL)
    }
  });

  function ValidateEmailAddress(emailString) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return !!emailString && typeof emailString === 'string'
      && emailString.match(emailRegex);
  }

  const validate = () => {
    if (name !== "" && ValidateEmailAddress(email) && message !== "" && how !== "") {
      return true
    }
  };

  const handleRecaptcha = value => {
    setCaptcha(value);
  };

  useEffect(() => {
    const isValid = validate();
    setDisabled(!isValid);
  }, [name, email, message, how]);

  // const handleSubmit = (event) => {
  //   event.preventDefault();

  //   const myForm = event.target;
  //   // const recaptchaValue = recaptchaRef.current.getValue()
  //   const formData = new FormData(myForm);
  //   // formData.append('g-recaptcha-response', recaptchaValue);
  //   formData.append("siteURL", siteURL);

  //   fetch("/", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/x-www-form-urlencoded" },
  //     body: new URLSearchParams(formData).toString(),
  //   })
  //     .then(() => setSubmit(true))
  //     .then(() => navigate("/es/thank-you"))
  //     .catch((error) => alert(error));
  // };

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
        setSubmitted(true);
        navigate("/es/thank-you");
      } else {
        throw new Error('Error en la solicitud');
      }
    } catch (error) {
      alert(error.message);
    }
  }

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
        id="form-landing"
        autoComplete='off'
        name="Form Contact Landing"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="form-name" value="Form Contact Landing" />
        <input type='hidden' name="bot-field" />

        <input
          type='text'
          name='name'
          placeholder='Nombre'
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type='email'
          name='email'
          placeholder='Correo'
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <textarea
          name='message'
          placeholder='¿Cómo te podemos ayudar?'
          onChange={(e) => setMessage(e.target.value)}
          required
        />

        <select name="comingFrom" required onChange={(e) => setHow(e.target.value)}>
          <option value="how">¿Cómo escuchaste sobre nosotros?</option>
          <option value="google">Google</option>
          <option value="behance">Behance</option>
          <option value="instagramFacebook">Instagram / Facebook</option>
          <option value="friend">Recomendación de un amigo</option>
          <option value="other">Otro</option>
        </select>
        <div className="cap-button">
          {/* <Recaptcha
            ref={recaptchaRef}
            sitekey={RECAPTCHA_KEY}
            onChange={handleRecaptcha}
            required
          /> */}
          <button disabled={disabled} type='submit'>Enviar</button>
        </div>
      </S.Form>
    </S.Container>
  )
}

export default ContactLanding
