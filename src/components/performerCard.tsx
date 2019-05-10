import * as React from 'react'
import styled from 'react-emotion'
import bandPicture from '../images/bandphoto.svg'

const LibraryFlex = styled('div')`
  display: flex;
  width: 100vw;
  position: relative;
  height: 100vh;
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
`
const PerformerPic = styled('div')`
  background: url(${bandPicture});
  background-size: cover;
  display: flex;
  position: absolute;
  height: 50%;
  width: 50%;
  margin: 0px;
  padding: 0px;
  &:hover ${PerformerHover} {
    opacity: 1;
  }
`
const ArtistName = styled('p')`
  font-family: 'Bebas Neue';
  font-size: 64px;
`
const AuthorName = styled('p')`
  font-family: Lato;
  font-size: 18px;
  font-weight: 900;
`
const CardExplainer = styled('p')`
  font-family: Lato;
  font-size: 18px;
`

export class PhotoLibrary extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <>
        <LibraryFlex>
          <PerformerPic>
            <PerformerHover className="hovelement">
              <ArtistName>ARTIST NAME</ArtistName>
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
