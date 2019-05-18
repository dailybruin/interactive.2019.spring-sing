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
// import AOS from 'aos'
import { storyListFont } from '@dailybruin/lux/src/globals/mainsiteGlobalStyles';
import cover from '../images/coverphoto.png'
import mobilecover from '../images/mobilecover.png'

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

const IndexPage = ({ data }) => {
  return (
    <div>
      {typeof document !== `undefined` && document.addEventListener("touchstart", function() {}, true)}
        <Head {...data.site.siteMetadata}/>
        <div className={css`
          height: 100vh;
          width: 100%;
          object-fit: cover;
          background-image: url(${cover});
          background-size: 100% 100%;
          @media only screen and (max-width: 900px) {
            background-image: url(${mobilecover});
          }
        `}>
          <div id="solos" className={css`
            position: absolute; 
            height: 0px;
            bottom: 0px;
          `}>
          </div>
        </div>
        <Navbar />
        <ItemGrid items={data.kerckhoffArticle.solos} id="duets" />
        <ItemGrid items={data.kerckhoffArticle.duets} id="bands" />
        <ItemGrid items={data.kerckhoffArticle.bands} id="extras" />
        <ItemGrid items={data.kerckhoffArticle.extras} id="" />
        <Footer developers={["Max Wu", "Henry Trinh", "Richard Yang", "Lauren Ho"]} copyrightYear={2019} />
    </div>
  )
}

export default IndexPage
