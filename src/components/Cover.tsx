import * as React from 'react'
import styled from 'react-emotion'
import Springcover from '../images/springcover.svg'

import {css} from 'emotion'

const Cover = styled('div')`
  background: url(${Springcover}) no-repeat fixed 100% 100%;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
  position: relative;
`

const CoverHead = styled('p')`
  font-family: Futura, Lato;
  font-size: 72px;
  color: white;
  text-align: right;
  max-width: 400px;
  margin: 0px;
`

export class CoverPic extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <>
        <Cover>
          <CoverHead>
            spring sing <strong className={css`font-weight: 1300;`}>2019</strong>
          </CoverHead>
          <div id="solos" className={css`
            position: absolute; 
            height: 0px;
            bottom: 0px;
          `}>
          </div>
        </Cover>
      </>
    )
  }
}
