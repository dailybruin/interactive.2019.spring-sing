import * as React from 'react'
import styled from 'react-emotion'
import { css } from 'react-emotion'
import { Link } from 'gatsby'
import image from '../images/image.svg'

// Styles

const H1 = styled('p')`
  font-family: Futura, Lato;
  text-decoration: none;
  padding: 0px 0px 0px 10px;
  border-radius: 20px;
  font-size: 36px;
  color: black;
  scroll-behavior: smooth;
  margin-top: 5px;
  margin-bottom: 5px;
  margin-left: 0px;
  @media only screen and (max-width: 1250px) {
    font-size: 24px;
  }
  @media only screen and (max-width: 900px) {
    font-size: 18px;
    padding: 0px 0px 0px 0px;
  }
`

const Img = styled('img')`
  height: 35px;
  width: 35px;
  align-self: center;
  margin: 10px;
  margin-left: 1px;
  @media only screen and (max-width: 900px) {
  }
`

const Nav = styled('nav')`
  z-index: 10000;
  background: white;
  position: -webkit-sticky;
  position: sticky;
  vertical-align: middle;
  top: 0;
  padding: 0px 0px 0px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  scroll-snap-align: start;
`
const Ul = styled('ul')`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: space-around;
  list-style-type: none;
  font-size: 24px;
  font-family: Nunito, Verdana, Geneva, Tahoma, sans-serif;
  margin: 0px;
`
const Li = styled('li')`
  display: flex;
  margin: auto;
  text-decoration: none;
  align-items: center;
  margin-right: 60px;
  @media only screen and (max-width: 1250px) {
    margin-right: 40px;
  }
  @media only screen and (max-width: 900px) {
    margin: 0px;
  }
`
const A = styled(Link)`
  font-family: Lato;
  text-decoration: none;
  padding-bottom: 2px;
  width: auto;
  color: black;
  margin-right: 5px;
  @media only screen and (max-width: 1250px) {
    font-size: 18px;
  }
  @media only screen and (max-width: 900px) {
    font-size: 14px;
    margin: 2px 8px 2px 0px;
  }
  scroll-behavior: smooth;
  &:hover {
    padding-bottom: 0px;
    border-bottom: 2px solid black;
  }
`

export class Navbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <>
        <Nav>
          <H1>
            spring sing <strong>2019</strong>
          </H1>

          <Ul>
            <Li>
              <A to="/#solos">solos</A>
            </Li>
            <Li>
              <A to="/#duets">duets</A>
            </Li>
            <Li>
              <A to="/#bands">bands</A>
            </Li>
            <Li>
              <A to="/#extras">extras</A>
            </Li>
            <Li>
              <A
                to="https://twitter.com/dailybruin?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
                className={css`
                  @media only screen and (max-width: 900px) {
                    display: none;
                  }
                `}
              >
                live updates
              </A>
              <a href="https://twitter.com/dailybruin?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blank">
                <Img src={image} />
              </a>
            </Li>
          </Ul>
        </Nav>
      </>
    )
  }
}
