import React from 'react'
import { css } from '@emotion/react'
import { Twitter, GitHub, LinkedIn } from './Social'
import Container from './Container'
import { bpMaxXS } from '../lib/breakpoints'
import { useStaticQuery, graphql } from 'gatsby'
import Newsletter from './Newsletter'

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          social {
            twitter
            linkedin
            github
          }
        }
      }
    }
  `)

  return (
    <>
      <Newsletter />
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
            `}>© Lorenzo Bernaschina's Website 2022</section>
            <nav>
              <Twitter url={data.site.siteMetadata.social.twitter} />
              <LinkedIn url={data.site.siteMetadata.social.linkedin} />
              <GitHub url={data.site.siteMetadata.social.github} />
            </nav>
          </div>
        </Container>
      </footer>
    </>
  )
    
  
}

export default Footer
