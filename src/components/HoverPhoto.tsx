import * as React from 'react'
import styled from 'react-emotion'
import bandPicture from '../images/bandphoto.svg'
import { Waypoint } from 'react-waypoint'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { CoverPhoto } from '@dailybruin/lux'
import { css } from 'react-emotion'
import { url } from 'inspector'

const LibraryFlex = styled('div')`
  flex: 1 0 34%;
  @media only screen and (max-width: 900px) {
    flex: 1 0 100%;
  }
  height: calc((100vh - 73px - 30px) / 2);
  overflow-y: hidden;
  font-family: Nunito, Verdana, Geneva, Tahoma, sans-serif;
`

const PerformerHover = styled('span')`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: 0;
  transition: 0.4s;
  background: rgba(61, 61, 61, 0.77);
  color: white;
  overflow-y: hidden;
  /*@media only screen and (max-width: 900px) {
    opacity: 1;
  }*/
`
const dynamic = props =>
  css`
    background: ${props.dynamicPic};
  `

const PerformerPic = styled('div')`
  ${dynamic};
  background-size: cover;
  display: flex;
  position: relative;
  flex-wrap: wrap;
  height: calc((100vh - 73px) / 2);
  min-width: 50%;
  @media only screen and (max-width: 900px) {
    min-width: 100%;
  }
  margin: 0px;
  padding: 0px;
  &:hover ${PerformerHover} {
    opacity: 1;
  }
  overflow-y: hidden;
`

const ArtistName = styled('p')`
  font-family: Bebas Neue, Oswald, sans-serif;
  font-size: 64px;
  margin-bottom: 15px;
  margin-top: 10px;
  padding: 0px;
  line-height: 1em;
  letter-spacing: 0.1em;
`
const AuthorName = styled('p')`
  font-family: Lato, Brandon Grotesque, sans-serif;
  font-size: 18px;
  font-weight: 900;
  margin-bottom: 20px;
  padding: 0px;
  letter-spacing: 0.1em;
`
const CardExplainer = styled('p')`
  font-family: Lato, Brandon Grotesque, sans-serif;
  font-size: 18px;
  padding: 0px;
  letter-spacing: 0.1em;
`

const TextWrapper = styled('div')`
  position: absolute;
  left: 7%;
  right: 20%;
  top: 5%;
`

interface HoverPhotoProps {
  item: {
    artist: String
    author: String
    explainer: String
    imageURL: string
    link: string
  }
}
AOS.init()
export class HoverPhoto extends React.Component<HoverPhotoProps> {
  constructor(props) {
    super(props)
  }

  opacityChange(Component) {
    this.setState(state => {
      return { opacity: 0 }
    })
  }

  render() {
    AOS.init()
    return (
      <>
        <Waypoint
          onLeave={this.opacityChange}
          onEnter={this.opacityChange}
          topOffset="80%"
        >
          <PerformerPic dynamicPic={this.props.item.imageURL}>
            <a href={this.props.item.link} target="_blank">
              <PerformerHover className="hovelement">
                <TextWrapper>
                  <ArtistName>
                    {this.props.item.artist.toUpperCase()}
                  </ArtistName>
                  <AuthorName>
                    BY {this.props.item.author.toUpperCase()}
                  </AuthorName>
                  <CardExplainer>{this.props.item.explainer}</CardExplainer>
                </TextWrapper>
              </PerformerHover>
            </a>
          </PerformerPic>
        </Waypoint>
      </>
    )
  }
}
