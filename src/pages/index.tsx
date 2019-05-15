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
import { storyListFont } from '@dailybruin/lux/src/globals/mainsiteGlobalStyles';

const Ftr = styled('div')`
  width: 100%;
  height: 30px;
  text-align: center;
  font-size: 12px;
  padding: 5px;
  font-family: Nunito, Verdana, Geneva, Tahoma, sans-serif;
`

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
      solos {
        artist
        author
        explainer
        imageURL
        link
      }
      duets {
        artist
        author
        explainer
        imageURL
        link
      }
      bands {
        artist
        author
        explainer
        imageURL
        link
      }
      extras {
        artist
        author
        explainer
        imageURL
        link
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
      {console.log(data)}
      <Navbar />
      <ItemGrid items={data.kerckhoffArticle.solos} id="duets" />
      <ItemGrid items={data.kerckhoffArticle.duets} id="bands" />
      <ItemGrid items={data.kerckhoffArticle.bands} id="extras" />
      <ItemGrid items={data.kerckhoffArticle.extras} id="" />
      <Ftr>- design by Lauren Ho -</Ftr>
    </div>
  )
}

export default IndexPage
