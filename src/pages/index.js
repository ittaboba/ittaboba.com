import React from 'react'
import { css } from '@emotion/react'
import Layout from '../components/Layout'
import { useTheme } from '../components/Theming'
import Typist from 'react-typist';
import TypistLoop from 'react-typist-loop';
import Container from '../components/Container'
import {  bpMinMD } from "../lib/breakpoints"
import Cards from '../components/Cards'
import Seo from '../components/seo'
import { graphql, Link } from 'gatsby'

const Hero = () => {
  const theme = useTheme()

  const colors = [
    '#EC331B',
    '#FF9728',
    '#FFD000',
    '#7ED321',
    '#17B9B8',
    '#007bff',
    '#7A3FBB'
  ]

  return (
    <section
      css={css`
        color: ${theme.colors.white};
        width: 100%;
        background: ${theme.colors.primary};
        padding: 20px 0 20px 0;
        display: flex;
        justify-content: center;
      `}
    >
      <div
        css={css`
          display: flex;
          flex-direction: column;
        `}
      >
        <div css={css`
          display: table; 
          top: 0px;
          left: 0px;
          width: 100%;
          height: 100%;
          margin: 0 auto;
          text-align: center;
          z-index: 1;
        `}>
            <div css={css`
              display: table-cell;
              vertical-align: middle;
              width: 100%;
              font-family: "Helvetica Neue";
              font-weight: 700;
              font-size: 24px;
              color: ${theme.colors.text};
              line-height: 1.6em;
              padding: 20px;
              ${bpMinMD} {
                font-size: 30px;
              }
            `}>
                <span>Hello, I am&nbsp;</span>
                <span css={css`
                  ${bpMinMD} {
                    display: inline-block;
                  }
                `}>
                    <TypistLoop interval={200}>
                        {
                            [
                                'Lorenzo',
                                'a software engineer',
                                'writing words and code',
                                'a full stack developer',
                                'an athlete',
                                'italian',
                                'learning AI'
                            ].map((text, i) => (
                                <Typist key={text}>
                                    <span style={{color: colors[i]}}>{text}</span>
                                    <Typist.Backspace count={text.length} delay={1500} />
                                </Typist> 
                            ))
                        }
                    </TypistLoop>
                </span>
            </div>
          </div>
      </div>
      <div
        css={css`
          height: 200px;
          overflow: hidden;
        `}
      />
    </section>
  )
}

export default function Index({data}) {
  const { edges: posts } = data.allMdx
  return (
    <Layout>
      <Seo />
      <Hero />
      <div
        css={css`
          padding-bottom: 0;
        `}
      >
        <p
          css={css`
            max-width: 750px;
            margin: 0 auto;
            padding: 20px;
            font-size: 20px;
            line-height: 1.6;
          `}>
            Hello, I am <Link to="/about">Lorenzo</Link>.
            I've been writing code for over 10 years (professionally for three and a half of those).
            Recently, I've started writing about systematic creativity, ethical technology, and personal growth too.
            I am bootstrapping a SaaS called <a href="https://gemsnotes.app/" target="_blank" rel="noopener noreferrer">Gems</a> to deal with information overload.
            I like learning and building in public by sharing my <Link to="/blog">discoveries</Link> and <Link to="/projects">side-projects</Link>.
        </p>
        <Container>
          <h1>
            Latest articles
          </h1>
          <Cards items={posts.filter((p, i) => i < 3)} />
        </Container>
      </div>
    </Layout>
  )
}


export const pageQuery = graphql`
  query home {
    allMdx(
      filter: {frontmatter: {type: { ne: "about" } } }
      sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            description
            slug
            banner {
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH)
              }
            }
          }
        }
      }
    }
  }
`