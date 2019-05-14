import * as React from 'react'
import { graphql } from 'gatsby'
import {
  Article,
  CoverPhoto,
  Footer,
  Head,
  XPosition,
  YPosition,
} from '@dailybruin/lux'
import styled, { css } from 'react-emotion'
import { CoverPic } from '../components/Cover'
import { Navbar } from '../components/Navbar'
import { ItemGrid } from '../components/ItemGrid'
import Band from '../images/bandphoto.svg'
import AOS from 'aos'

export const query = graphql`
  query {
    site {
      siteMetadata {
        siteName
        description
        url
        image
      }
    }
    kerckhoffArticle {
      headline
      author
      content {
        type
        value
      }
    }
  }
`

const TESTPROPS = [
  {
    artist: 'hi',
    author: 'hi2',
    explainer: 'ex3',
    imageURL:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/PNG_transparency_demonstration_1.png/280px-PNG_transparency_demonstration_1.png',
    link: '/',
  },
  {
    artist: 'hAHAAHA',
    author: 'hi2',
    explainer: 'ex3',
    imageURL: 'lol',
    link: '/',
  },
  {
    artist: 'custom artist names!',
    author: 'hi2',
    explainer: 'ex3',
    imageURL: 'lol',
    link: '/',
  },
  {
    artist: 'look another artist',
    author: 'hi2',
    explainer: 'ex3',
    imageURL: 'lol',
    link: '/',
  },
  {
    artist: 'passing in props is cool!',
    author: 'hi2',
    explainer: 'ex3',
    imageURL: 'lol',
    link: '/',
  },
  {
    artist: 'hAHAAHA',
    author: 'hi2',
    explainer: 'ex3',
    imageURL: 'lol',
    link: '/',
  },
]

const IndexPage = ({ data }) => {
  AOS.init()
  return (
    <div>
      <CoverPic />
      <Navbar />
      <ItemGrid items={TESTPROPS} />
    </div>
  )
}

export default IndexPage
