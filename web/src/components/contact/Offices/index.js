import React, { useState, useEffect } from 'react';
import BlockContent from '@sanity/block-content-to-react';
import { OfficesContainer } from './styles';
import { localize } from '../../../utils/helpers';
import { DateTime, TIME_SIMPLE } from "luxon"

const Offices = ({ title, language }) => {
  const heading = localize(title, [language])
  const [cdmxTime, setMXTime] = useState(DateTime.now().setZone("America/Mexico_City").setLocale("en").toFormat("hh:mm a"))
  const [madridTime, setSPTime] = useState(DateTime.now().setZone("Europe/Madrid").setLocale("en").toFormat("hh:mm a"))
  let hourSP = DateTime.now().setZone("Europe/Madrid").toFormat("hh");
  let hourMX = DateTime.now().setZone("America/Mexico_City").toFormat("hh");
  const isOpenMadrid = hourSP >= 9 && hourSP <= 18;
  const isOpenMx = hourMX >= 9 && hourMX <= 18;
  const openText = language === "es" ? "Abierto" : "We're Open";
  const closeText = language === "es" ? "Cerrado" : "We're Closed";

  useEffect(() => {
    const newTime = setInterval(() => {
      setMXTime(DateTime.now().setZone("America/Mexico_City").setLocale("en").toFormat("hh:mm a"))
      setSPTime(DateTime.now().setZone("Europe/Madrid").setLocale("en").toFormat("hh:mm a"))
    }, 10000);
    return () => {
      clearInterval(newTime)
    }
  }, [cdmxTime, madridTime])

  return (
    <OfficesContainer>
      <h3>
        <BlockContent
          blocks={heading}
        />
      </h3>
      <div className="offices" data-sal="fade"
  data-sal-duration="500"
  data-sal-easing="ease">
        <div>
          <p><em>01</em></p>
          <p><strong>{language === "es" ? "CIUDAD DE MÉXICO" : "MEXICO CITY"}</strong> | {cdmxTime} - <em>{isOpenMx ? openText : closeText}</em></p>
        </div>
        <div>
          <p><em>02</em></p>
          <p><strong>MADRID</strong> | {madridTime} - <em>{isOpenMadrid ? openText : closeText}</em></p>
        </div>
      </div>
    </OfficesContainer>
  )
}

export default Offices;
