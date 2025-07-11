import React, { useRef, useState, useEffect } from "react";
import BlockContent from '@sanity/block-content-to-react';
import { FORM } from '../../utils/constants';
import { localize } from "../../utils/helpers";
import HubspotForm from 'react-hubspot-form'

const SidebarForm = ({ contact, language, thankYou }) => {
  const contactHeadline = localize(contact._rawSidebarHeadline, [language])
  const thanksHeadline = localize(thankYou._rawHeading, [language])
  const [captcha, setCaptcha] = useState(null);
  const recaptchaRef = useRef();

  const [submitted, setSubmitted] = useState(false)
  const [siteURL, setSiteURL] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setSiteURL(window.location.href);
    }
  });

  // const handleSubmit = async (e) => {
  //   e.preventDefault()
  //   const form = e.target
  //   const recaptchaValue = recaptchaRef.current.getValue()
  //   const formData = new FormData(form);
  //   formData.append('g-recaptcha-response', recaptchaValue);
  //   formData.append("siteURL", siteURL);

  //   try {
  //     const response = await fetch('/', {
  //       method: 'POST',
  //       body: formData,
  //     });
  //     if (response.ok) {
  //       setSubmitted(true);
  //     } else {
  //       throw new Error('Error en la solicitud');
  //     }
  //   } catch (error) {
  //     alert(error.message);
  //   }
  // }

  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "center" }}>
      <div className="heading">
        <BlockContent
          blocks={contactHeadline}
        />
      </div>

    <div style={{height: "68vh", padding: "20rem 0 4rem", display: "flex", flexDirection: "column", justifyContent: "center", overflow: "scroll"}}>
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
          
          {/* <form
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
              {contact?.services?.map((serv, i) => (
                <option key={`serv-form-sidebar-${i}`} value={serv[language]}>{serv[language]}</option>
              ))}
            </select>
            <select
              name="industry"
              required
            >
              <option value="" selected disabled hidden>{FORM.industry[language]}</option>
              {contact?.industries?.map((ind, i) => (
                <option key={`ind-form-sidebar-${i}`} value={ind[language]}>{ind[language]}</option>
              ))}
            </select>
            <select
              name="comingFrom"
              required
            >
              <option value="" selected disabled hidden>{FORM.hear[language]}</option>
              {contact?.how?.map((how, i) => (
                <option key={`how-form-sidebar-${i}`} value={how[language]}>{how[language]}</option>
              ))}
            </select>
            <select
              name="location"
              required
            >
              <option value="" selected disabled hidden>{FORM.location[language]}</option>
              {contact?.locations?.map((loc, i) => (
                <option key={`loc-form-sidebar-${i}`} value={loc[language]}>{loc[language]}</option>
              ))}
            </select>
            <div style={{marginTop: "2rem"}}>
            <input
              className="hidden"
              type='text'
              name='siteURL'
              value={siteURL}
            />
            <Recaptcha
                required
                ref={recaptchaRef}
                sitekey={RECAPTCHA_KEY}
                onChange={handleRecaptcha}
            />
            <button type='submit'>{FORM.submit[language]}</button>
            </div>
          </form> */}
          <HubspotForm
            key={`${language}-${FORM.sFormID[language]}`}
            portalId={FORM.portalID[language]}
            formId={FORM.sFormID[language]}
            loading={<div>Loading...</div>}
            redirectUrl={`/${language}/thank-you`}
          />
        </>
      )}
    </div>
    </div>
  )
}

export default SidebarForm
