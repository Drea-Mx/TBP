import React from 'react'
import styled from 'styled-components'
import BlockContent from '@sanity/block-content-to-react';

const Lead = ({ data }) => {
  return(
    <LeadContainer id='about'>
      <div className='line'></div>
        <BlockContent
          blocks={data}
        />
      <div className='circle' />
    </LeadContainer>
  )
}

const LeadContainer = styled.section`

text-align: center;
padding-top: 100px;
padding-bottom: 100px;
p {
    font-size: 5vw;
    i, em {
        color: var(--blue);
    }
    @media (max-width: 680px) {
        font-size: 15vw;
    }
}
.line {
    width: 25px;
    height: 3px;
    background-color: var(--blue);
    margin: 0 auto 50px;
}
.circle {
    width: 15px;
    height: 15px;
    border: solid 3px var(--blue);
    margin: 50px auto 0;
    border-radius: 50%;
}
`

export default Lead