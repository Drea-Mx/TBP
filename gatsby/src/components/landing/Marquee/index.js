import React from 'react'
import * as S from './styles'

const CityRow = ({ cities }) => (
  <S.Row>
    {cities.map((city) => (
      <li key={`City-${city}`}>{city}</li>
      ))}
    {cities.map((city) => (
      <li key={`City-${city}`}>{city}</li>
      ))}
    {cities.map((city) => (
      <li key={`City-${city}`}>{city}</li>
      ))}
    {cities.map((city) => (
      <li key={`City-${city}`}>{city}</li>
      ))}
    {cities.map((city) => (
      <li key={`City-${city}`}>{city}</li>
      ))}
    {cities.map((city) => (
      <li key={`City-${city}`}>{city}</li>
      ))}
  </S.Row>
);

const Marquee = ({ cities, cities2, cities3, cities4 }) => {
  return(
    <S.Container>
      <CityRow cities={cities} />
      <CityRow cities={cities2} />
      <CityRow cities={cities3} />
      <CityRow cities={cities4} />
    </S.Container>
  )
}

export default Marquee
