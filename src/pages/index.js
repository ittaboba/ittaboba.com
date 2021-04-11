import React from 'react'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import Layout from '../components/Layout'
import Link from '../components/Link'
import { useTheme } from '../components/Theming'
import Container from '../components/Container'
import Typist from 'react-typist';
import TypistLoop from 'react-typist-loop';

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
        padding: 20px 0 30px 0;
        display: flex;
      `}
    >
      <Container
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
              font-size: 30px;
              color: #202020;
            `}>
                <span>Hello, I am&nbsp;</span>
                <span css={css`
                  display: inline-block;
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
      </Container>
      <div
        css={css`
          height: 200px;
          overflow: hidden;
        `}
      />
    </section>
  )
}

export default function Index() {
  const theme = useTheme()
  return (
    <Layout>
      <Hero />
      <Container
        css={css`
          padding-bottom: 0;
        `}
      >
        <p>
          Hello, I am Lorenzo. Here’s my personal journey so far. I have spent almost a decade making projects and learning how to build solutions. It was fun and I enjoyed every second of it. Now I am focusing on how to find problems worth solving. Once I will have these mental models, I will be finally ready to make a living doing what I love. I am building a networked bookmarking and note-taking app called Gems. 
        </p>
      </Container>
    </Layout>
  )
}


