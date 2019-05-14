import * as React from 'react'
import styled from 'react-emotion'
import Springcover from '../images/springcover.svg'
import { Navbar } from './Navbar'
import { HoverPhoto } from './HoverPhoto'

const Container = styled('div')`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  position: relative;
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
  font-family: Nunito, Verdana, Geneva, Tahoma, sans-serif;
`

interface ItemGridProps {
  items: {
    artist: String
    author: String
    explainer: String
    imageURL: string
    link: string
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
            this.props.items.map(item => <HoverPhoto item={item} />)}
        </Container>
        <Ftr>- design by Lauren Ho -</Ftr>
      </>
    )
  }
}
