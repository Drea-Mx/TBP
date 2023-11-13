import React, { useRef, useState } from "react";
import Recaptcha from "react-google-recaptcha";
import BlockContent from '@sanity/block-content-to-react';
import { FORM } from '../../utils/constants';
import { localize } from "../../utils/helpers";

const RECAPTCHA_KEY = process.env.SITE_RECAPTCHA_KEY || "test";

function encode(data) {
  const formData = new URLSearchParams();

  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      formData.append(key, data[key]);
    }
  }

  return formData.toString();
}

const SidebarForm = ({ contact, language, thankYou }) => {
  const contactHeadline = localize(contact._rawSidebarHeadline, [language])
  const thanksHeadline = localize(thankYou._rawHeading, [language])
  const [captcha, setCaptcha] = useState(null);
  const recaptchaRef = useRef();

  const [state, setState] = useState({})
  const [submitted, setSubmitted] = useState(false)

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
    .then(() => setSubmitted(true))
    .catch(error => alert(error))
  }

  return (
    <div style={{height: "100%", display: "flex", flexDirection: "column", justifyContent: "center"}}>
      {submitted ? (
        <>
          <div className="heading">
            <BlockContent
              blocks={thanksHeadline}
            />
          </div>
          <div style={{margin: "0 0 3rem"}}>
            <svg width="20" height="4" viewBox="0 0 20 4" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 0H0V4H20V0Z" fill="#014FFE"/>
            </svg>
          </div>
          <h4 style={{fontSize: "1.5rem", color: "white", fontFamily: "var(--plain)"}}>{thankYou.eyebrow[language]}</h4>
        </>
      ) : (
        <>
          <div className="heading">
            <BlockContent
              blocks={contactHeadline}
            />
          </div>
          <form
            name="Form-Sidebar"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            data-netlify-recaptcha="true"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="form-name" value="Form-Sidebar" />
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
            <select
              name="services"
              required
              value={state.services}
              onChange={handleInputChange}
            >
              <option value="" selected disabled hidden>{FORM.help[language]}</option>
              {contact?.services?.map((serv, i) => (
                <option key={`serv-form-sidebar-${i}`} value={serv}>{serv[language]}</option>
              ))}
            </select>
            <select
              name="industry"
              required
              value={state.industry}
              onChange={handleInputChange}
            >
              <option value="" selected disabled hidden>{FORM.industry[language]}</option>
              {contact?.industries?.map((ind, i) => (
                <option key={`ind-form-sidebar-${i}`} value={ind}>{ind[language]}</option>
              ))}
            </select>
            <select
              name="comingFrom"
              required
              value={state.comingFrom}
              onChange={handleInputChange}
            >
              <option value="" selected disabled hidden>{FORM.hear[language]}</option>
              {contact?.how?.map((how, i) => (
                <option key={`how-form-sidebar-${i}`} value={how}>{how[language]}</option>
              ))}
            </select>
            <select
              name="location"
              required
              value={state.location}
              onChange={handleInputChange}
            >
              <option value="" selected disabled hidden>{FORM.location[language]}</option>
              {contact?.locations?.map((loc, i) => (
                <option key={`loc-form-sidebar-${i}`} value={loc}>{loc[language]}</option>
              ))}
            </select>
            <div style={{marginTop: "2rem"}}>
            <Recaptcha
                required
                ref={recaptchaRef}
                sitekey={RECAPTCHA_KEY}
                onChange={handleRecaptcha}
            />
            <button type='submit'>{FORM.submit[language]}</button>
            </div>
          </form>
        </>
      )}
    </div>
  )
}

export default SidebarForm
