import * as React from 'react'
import styled from 'react-emotion'
import { css } from 'react-emotion'
import { Link } from 'gatsby'
import image from '../images/image.svg'

// Styles

const H1 = styled('h1')`
  font-family: Arial;
  text-decoration: none;
  padding: 0px 0px 0px 10px;
  border-radius: 20px;
  font-size: 28px;
  color: black;
  scroll-behavior: smooth;
  @media only screen and (max-width: 900px) {
    font-size: 20px;
    padding: 0px 0px 0px 10px;
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
  top: 0px;
  padding: 0px 20px 0px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  scroll-snap-align: start;
`
const Ul = styled('ul')`
  display: inline-block;
  text-align: center;
  list-style-type: none;
  font-family: Nunito, Verdana, Geneva, Tahoma, sans-serif;
  margin: 0px;
`
const Li = styled('li')`
  display: inline-block;
  margin: 10px 0px 10px 0px;
  text-decoration: none;
  @media only screen and (max-width: 900px) {
    margin: 0px;
  }
`
const A = styled(Link)`
  text-decoration: none;
  padding: 3px 1px;
  margin: 10px 0px 10px 40px;
  color: black;
  font-size: 18px;
  @media only screen and (max-width: 900px) {
    font-size: 14px;
    margin: 5px 20px 5px 0px;
  }
  scroll-behavior: smooth;
  &:hover {
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
          <Ul
            className={css`
              margin: 10px;
            `}
          >
            <Li>
              <H1>spring sing</H1>
            </Li>
            <Li>
              <H1
                className={css`
                  font-size: 30px;
                  font-weight: 900px;
                  @media only screen and (max-width: 900px) {
                    font-size: 25px;
                  }
                `}
              >
                2019
              </H1>
            </Li>
          </Ul>
          <div
            className={css`
              display: flex;
              align-items: center;
            `}
          >
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
              <Li
                className={css`
                  @media only screen and (max-width: 900px) {
                    display: none;
                  }
                `}
              >
                <A to="/#live-updates">live updates</A>
              </Li>
            </Ul>
            <a href="http://www.google.com" target="_blank">
              <Img src={image} />
            </a>
          </div>
        </Nav>
      </>
    )
  }
}
