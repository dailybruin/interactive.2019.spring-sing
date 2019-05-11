import * as React from 'react'
import styled from 'react-emotion'
import bandPicture from '../images/bandphoto.svg'

const LibraryFlex = styled('div')`
  flex: 1 0 34%;
  @media only screen and (max-width: 900px) {
    flex: 1 0 51%;
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
`
const PerformerPic = styled('div')`
  background: url(${bandPicture});
  background-size: cover;
  display: flex;
  position: absolute;
  height: calc((100vh - 73px - 30px) / 2);
  width: 50%;
  margin: 0px;
  padding: 0px;
  &:hover ${PerformerHover} {
    opacity: 1;
  }
  overflow-y: hidden;
`
const ArtistName = styled('p')`
  font-family: Oswald, sans-serif;
  font-size: 64px;
`
const AuthorName = styled('p')`
  font-family: Brandon Grotesque, sans-serif;
  font-size: 18px;
  font-weight: 900;
`
const CardExplainer = styled('p')`
  font-family: Brandon Grotesque, sans-serif;  
  font-size: 18px;
`

interface HoverPhotoProps {
  item: {
    artist: String,
    author: String,
    explainer: String,
    imageURL: String,
  }
}

export class HoverPhoto extends React.Component<HoverPhotoProps> {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <>
        <LibraryFlex>
          <PerformerPic>
            <PerformerHover className="hovelement">
              <ArtistName>{this.props.item.artist.toUpperCase()}</ArtistName>
              <AuthorName>BY AUTHOR NAME</AuthorName>
              <CardExplainer>
                very short explainer of who this is and what they do; this shows
                up when users hover over the artist photo!
              </CardExplainer>
            </PerformerHover>
          </PerformerPic>
        </LibraryFlex>
      </>
    )
  }
}
