import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/SEO"
import { css } from '@emotion/core'

import Layout from "../components/Layout"
import { bpMaxMD, bpMaxSM } from "../lib/breakpoints"
import Container from "../components/Container"
import Cards from "../components/Cards"

export default function Blog({data}) {
    const { edges: posts } = data.allMdx

    const title = "Blog"
    const subtitle = "Documenting my journey and discoveries"

    return (
      <Layout>
        <SEO 
          title={title}
          description={subtitle}
          path={"/blog"}
        />
        <Container noVerticalPadding>
          <h1 css={css`
            padding: 0 40px;
            text-align: center;
            font-weight: 600;
            font-size: 40px;
            ${bpMaxMD} {
              font-size: 33px;
            }
            ${bpMaxSM} {
              font-size: 26px;
            }
          `}>{title}</h1>
          <p css={css`
            text-align: center;
            font-size: 25px;
            ${bpMaxMD} {
              font-size: 22px;
            }
            ${bpMaxSM} {
              font-size: 16px;
            }
          `}>{subtitle}</p>
          <Cards items={posts} />
        </Container>
      </Layout>
    )
}

export const pageQuery = graphql`
  query blogIndex {
    allMdx(
      filter: {frontmatter: {type: { eq: "blog" } } }
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