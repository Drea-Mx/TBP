import React from 'react'
import BlockContent from '@sanity/block-content-to-react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import * as S from './styles'
import { Link } from 'gatsby'

const Projects = ({ heading, projects, cta }) => {
  return (
    <S.Container>
      <div className='header'>
        <BlockContent blocks={heading} />
      </div>
      <S.Grid>
        {projects?.map(({ _key, title, slider }) => (
          <div key={_key} className='box'>
            <GatsbyImage
              alt={`The Branding People | ${title}`}
              style={{ height: "100%", width: "100%" }}
              image={getImage(slider[0].asset)}
            />
          </div>
        ))}
      </S.Grid>
      <div className='footer'>
        <Link to="/work"><BlockContent blocks={cta}/></Link>
      </div>
    </S.Container>
  )
}

export default Projects
