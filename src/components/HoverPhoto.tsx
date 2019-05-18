import * as React from 'react'
import styled from 'react-emotion'
import bandPicture from '../images/bandphoto.svg'
// import { Waypoint } from 'react-waypoint'
// import AOS from 'aos'
// import 'aos/dist/aos.css'
import { CoverPhoto } from '@dailybruin/lux'
import { css } from 'react-emotion'
import { Interpolation } from 'emotion';

// const LibraryFlex = styled('div')`
//   flex: 1 0 34%;
//   @media only screen and (max-width: 900px) {
//     flex: 1 0 51%;
//   }
//   height: calc((100vh - 73px - 30px) / 3);
//   overflow-y: hidden;
//   font-family: Nunito, Verdana, Geneva, Tahoma, sans-serif;
// `

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
    background: url(${props.dynamicPic});
    background-position: center;
  `

const PerformerPic = styled('div')`
  ${dynamic};
  background-size: cover;
  display: flex;
  position: relative;
  flex-wrap: wrap;
  height: calc((100vh - 73px) / 1.5);
  flex: 1 0 34%;
  @media only screen and (max-width: 900px) {
    flex: 1 0 51%;
  }
  margin: 0px;
  padding: 0px;
  &:hover ${PerformerHover} {
    opacity: 1;
  }
  &:active ${PerformerHover} {
    opacity: 1;
  }
  @media only screen and (max-width: 900px) {
    ${PerformerHover} {
    }
  }
  overflow-y: hidden;
`

const ArtistName = styled('p')`
  font-family: Bebas Neue, Oswald, sans-serif;
  font-size: 56px;
  @media only screen and (max-width: 1250px) {
    font-size: 48px;
  }
  margin-bottom: 15px;
  margin-top: 10px;
  padding: 0px;
  line-height: 1em;
  letter-spacing: 0.1em;
`
const AuthorName = styled('p')`
  font-family: Lato, Brandon Grotesque, sans-serif;
  font-size: 18px;
  @media only screen and (max-width: 900px) {
    font-size: 14px;
  }
  font-weight: 900;
  margin-bottom: 20px;
  padding: 0px;
  letter-spacing: 0.1em;
`
const CardExplainer = styled('p')`
  font-family: Lato, Brandon Grotesque, sans-serif;
  font-size: 18px;
  @media only screen and (max-width: 900px) {
    font-size: 14px;
  }
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
    artist: string,
    author: string,
    explainer: string,
    imageURL: string,
    link: string,
  }
}

interface HoverPhotoState {
  opacity: Interpolation,
}
// AOS.init()


export class HoverPhoto extends React.Component<HoverPhotoProps, HoverPhotoState> {
  constructor(props) {
    super(props)
  }

  opacityChange() {
  }

  render() {
    // AOS.init()

    if (this.props.item.link == "NULL")
    {
      return (
        <div className={css`
          height: calc((100vh - 73px) / 1.5);
          background-color: rgba(0,0,0,0.65);
          flex: 1 0 34%;
          @media only screen and (max-width: 900px) {
            display: none;
          }
        `}>
          
        </div>
      )
    }
    return (
      <>
        {/* <Waypoint
          onEnter={this.opacityChange}
          topOffset="80%"
        > */}
          <PerformerPic dynamicPic={this.props.item.imageURL}>
            <a href={this.props.item.link} target="_blank">
              <PerformerHover>
                <TextWrapper>
                  <ArtistName className={css`
                    font-size: ${this.props.item.artist.toUpperCase() == "NEWS: GERSHWIN AWARD RESCINDED" ? "48px":"56px"};
                    @media only screen and (max-width: 1250px) {
                      font-size: ${this.props.item.artist.toUpperCase() == "NEWS: GERSHWIN AWARD RESCINDED" ? "40px":"48px"};
                    }
                  `}>
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
        {/* </Waypoint> */}
      </>
    )
  }
}
