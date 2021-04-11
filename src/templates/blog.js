import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import BlogCard from "./card"
import SEO from "../components/SEO"
import { css } from '@emotion/core'

import Layout from "../components/Layout"
import { bpMaxMD, bpMaxSM, bpMinMD } from "../lib/breakpoints"

export default function Blog({data}) {
    const { edges: posts } = data.allMdx

    const title = "Make the most of your digital environment"
    const subtitle = "Theories and practices to deal with cognitive overload"

    return (
        <Layout>
            {/* <SEO 
              title={title}
              description={subtitle}
              path={"/blog"}
            /> */}
            <h1 css={css`
                  padding: 100px 40px 0 40px;
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
                  color: rgb(103, 103, 103);
                  text-align: center;
                  font-size: 25px;
                  ${bpMaxMD} {
                    font-size: 22px;
                  }
                  ${bpMaxSM} {
                    font-size: 16px;
                  }
                `}>{subtitle}</p>
            <div css={css`
                  padding: 20px;
                `}>
                <div css={css`
                  ${bpMinMD} {
                    display: grid;
                    grid-template-columns: 1fr 1fr 1fr;
                    gap: 32px;
                  }
                `}>
                    {
                        posts.map(({ node: post }) => {
                            return <div key={post.frontmatter.slug}>
                                <Link style={{textDecoration: 'none'}} to={`/article/${post.frontmatter.slug}`}>
                                    <BlogCard
                                      title={post.frontmatter.title}  
                                      preview={post.frontmatter.description}
                                      image={post.frontmatter.banner.childImageSharp.gatsbyImageData} />
                                </Link>
                            </div>
                        })
                    }
                </div>
            </div>
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