import * as React from 'react'
import styled, {css} from 'react-emotion'
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

interface ItemGridProps {
  id: string,
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
    console.log(this.props.items.length)
    if (this.props.items.length % 2 !== 0)
    {
      this.props.items.push({artist: "", author: "", explainer: "", imageURL: "", link: "NULL"})
    }
    return (
      <>
        <Container>
          {this.props.items &&
            this.props.items.map(item => <HoverPhoto item={item} />)}
          <div id={this.props.id} className={css`
            position: absolute; 
            bottom: 0; 
            height: 62px; 
            width: 100%;
            pointer-events: none;
            @media only screen and (max-width: 1250px) {
              height: 54.45px;
            }
          `}>
          </div>
        </Container>
      </>
    )
  }
}
