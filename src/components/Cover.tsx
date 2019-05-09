import * as React from 'react'
import styled from 'react-emotion'
import Springcover from '../images/springcover.svg'

const Cover = styled('div')`
  background: url(${Springcover});
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
`

const CoverHead = styled('p')`
  @font-face {
    font-family: Futura;
    src: local('Futura Std');
  }
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
            spring sing <strong>2019</strong>
          </CoverHead>
        </Cover>
      </>
    )
  }
}
