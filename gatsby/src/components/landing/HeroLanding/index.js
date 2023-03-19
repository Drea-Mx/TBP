import React from 'react'
import BlockContent from '@sanity/block-content-to-react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import * as S from './styles'

const HeroLanding = ({ text, ctaText, cta, thumbnail, video }) => {
  return(
    <S.Container>
      <S.Texts>
        <img src='/tbp_logotype_a.svg' alt="The Branding People Logo"/>
        <BlockContent
          blocks={text}
        />
        <div className='separator' />
        <S.Cta>
          <BlockContent
            blocks={ctaText}
          />
          <a href='#landingForm'>{cta}</a>
        </S.Cta>
      </S.Texts>
      <S.Video>
        <GatsbyImage
          style={{ height: "100%", width: "100%" }}
          image={getImage(thumbnail.asset)}
          alt="video thumbnail"
        />
      </S.Video>
    </S.Container>
  )
}

export default HeroLanding
