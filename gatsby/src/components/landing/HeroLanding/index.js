import React from 'react'
import BlockContent from '@sanity/block-content-to-react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Vimeo from '@u-wave/react-vimeo';
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
        <div className='video'>
          <Vimeo
            video={video}
            autoplay
            muted
            playsInline
            background
            controls={false}
            loop
            responsive
          />
        </div>
      </S.Video>
    </S.Container>
  )
}

export default HeroLanding
