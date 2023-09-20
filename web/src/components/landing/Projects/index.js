import React, { useState, useEffect } from 'react'
import BlockContent from '@sanity/block-content-to-react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import * as S from './styles'
import { Link } from 'gatsby'
import SliderLanding from './Slider'

const Projects = ({ heading, projects, cta }) => {
  const
    [open, setOpen] = useState(false),
    [slides, setSlides] = useState(null);

  const handleOpenModal = (i) => {
    setOpen(true)
    setSlides(projects[i])
  }

  useEffect(() => {
    if (open && typeof window !== 'undefined') {
      document.querySelector('body').classList.add('no-scroll')
    } else {
      document.querySelector('body').classList.remove('no-scroll')
    }
  }, [open])

  return (
    <S.Container>
      <div className='header'>
        <BlockContent blocks={heading} />
      </div>
      <S.Grid>
        {projects?.map(({ _key, title, slider }, i) => (
          <div key={_key} className='box' onClick={() => handleOpenModal(i)}>
            <GatsbyImage
              alt={`The Branding People | ${title}`}
              style={{ height: "100%", width: "100%" }}
              image={getImage(slider[0].asset)}
            />
          </div>
        ))}
      </S.Grid>
      {open && (
        <S.Modal onClick={() => setOpen(false)}>
          <div className='inner' onClick={(e) => e.stopPropagation()}>
            <button className='close' onClick={() => setOpen(false)}>
              <img src='/Close_ page_ X.png' alt="close button" />
            </button>
            <SliderLanding slides={slides?.slider} title={slides?.title} />
          </div>
        </S.Modal>
      )}
      <div className='footer'>
        <Link to="/work"><BlockContent blocks={cta}/></Link>
      </div>
    </S.Container>
  )
}

export default Projects
