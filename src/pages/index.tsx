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
import styled, {css} from 'react-emotion'
import { CoverPic } from '../components/Cover'
import { Navbar } from '../components/Navbar'
import { ItemGrid } from '../components/ItemGrid'

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
    imageURL: 'lol',
  },
  {
    artist: 'hAHAAHA',
    author: 'hi2',
    explainer: 'ex3',
    imageURL: 'lol',
  },
  {
    artist: 'custom artist names!',
    author: 'hi2',
    explainer: 'ex3',
    imageURL: 'lol',
  },
  {
    artist: 'look another artist',
    author: 'hi2',
    explainer: 'ex3',
    imageURL: 'lol',
  },
  {
    artist: 'passing in props is cool!',
    author: 'hi2',
    explainer: 'ex3',
    imageURL: 'lol',
  },
  {
    artist: 'hAHAAHA',
    author: 'hi2',
    explainer: 'ex3',
    imageURL: 'lol',
  },
]

const IndexPage = ({ data }) => (
  <div>
    <CoverPic />
    <Navbar />
    <ItemGrid items={TESTPROPS} />
  </div>
)

export default IndexPage;