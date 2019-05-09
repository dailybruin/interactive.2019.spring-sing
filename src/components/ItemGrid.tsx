import * as React from 'react'
import styled from 'react-emotion'
import Springcover from '../images/springcover.svg'
import { Navbar } from './Navbar'

const Container = styled('div')`
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  background-color: green;
`

const OWO = styled('div')`
  flex: 1 0 34%;
  @media only screen and (max-width: 900px) {
    flex: 1 0 51%;
  }
  height: calc((100vh - 73px - 30px) / 2);
  border: 5px solid black;
`

const Ftr = styled('div')`
  width: 100%;
  height: 30px;
  text-align: center;
  font-size: 12px;
  padding: 5px;
`

interface ItemGridProps {
  items: {
    artist: String,
    author: String,
    explainer: String,
    imageURL: String,
  }[]
}


export class ItemGrid extends React.Component<ItemGridProps> {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <>
        <Container>
          {console.log(this.props.items)}
          {this.props.items &&
          this.props.items.map(item => 
            <OWO>
              {item.artist}
            </OWO>
          )
          }
        </Container>
        <Ftr>
          - design by Lauren Ho -
        </Ftr>
      </>
    )
  }
}
