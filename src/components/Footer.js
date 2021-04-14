import React from 'react'
import { css } from '@emotion/core'
import { Twitter, GitHub, LinkedIn } from './Social'
import Container from './Container'
import { bpMaxXS } from '../lib/breakpoints'

const Footer = () => (
  <footer>
    <Container>
      <div css={css`
          display: flex;
          align-items: center;
          justify-content: space-between;
        `}>
        <section css={css`
          font-size: 13px;
          ${bpMaxXS} {
            font-size: 10px;
          }
        `}>© Lorenzo Bernaschina's Website 2021</section>
        <nav>
          <Twitter />
          <LinkedIn />
          <GitHub />
        </nav>
      </div>
    </Container>
  </footer>
)

export default Footer
