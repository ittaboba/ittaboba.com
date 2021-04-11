import React, { useState } from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { css } from '@emotion/core'
import SEO from "../components/SEO"

import components from "../components/mdx"
import Layout from "../components/Layout"
import { bpMaxLG, bpMaxMD, bpMaxSM, bpMaxXS } from "../lib/breakpoints"

export default function Post({data:{mdx}}) {
    return (
        <Layout>
            {/* <SEO 
                title={mdx.frontmatter.title}
                description={mdx.frontmatter.description}
                image={mdx.frontmatter.banner.childImageSharp.gatsbyImageData.images.fallback.src}
                path={`/${mdx.frontmatter.slug}`}
                isBlogPost /> */}
            <div>
                <GatsbyImage style={{marginTop: "60px"}} alt={"Hero image"} image={mdx.frontmatter.banner.childImageSharp.gatsbyImageData} />
                <div css={css`
                    padding-top: 20px;
                    padding-right: 20px;
                    padding-left: 20px;
                    text-align: center;
                    box-sizing: border-box;
                    max-width: 900px;
                    margin-left: auto;
                    margin-right: auto;
                `}>
                <div css={css`
                    margin-left: auto;
                    margin-right: auto;
                    padding-left: 0;
                    padding-right: 0;
                    max-width: 1100px;
                `}>
                    <h1 css={css`
                        font-family: "Helvetica Neue";
                        font-size: 45px;
                        font-weight: 600;
                        color: #4A4A4A;
                        ${bpMaxXS} {
                            font-size: 30px;
                        }
                        ${bpMaxSM} {
                            font-size: 33px;
                        }
                        ${bpMaxMD} {
                            font-size: 35px;
                        }
                        ${bpMaxLG} {
                            font-size: 40px;
                        }
                    `}>{mdx.frontmatter.title}</h1>
                    <p css={css`
                        font-weight: 500;
                        color: #676767;
                        ${bpMaxXS} {
                            font-size: 16px;
                        }
                        ${bpMaxSM} {
                            font-size: 18px;
                        }
                        ${bpMaxMD} {
                            font-size: 18px;
                        }
                        ${bpMaxLG} {
                            font-size: 18px;
                        }
                    `}>
                        <a href="https://twitter.com/Ittaboba" target="_blank" rel="noopener noreferrer">
                            {`${mdx.frontmatter.author}`}
                        </a>
                        {` ∙ Reading time: ${mdx.timeToRead} minutes`}
                    </p>
                </div>
            </div>
            </div>
            
            <article>
                <div style={{padding: "0 20px 20px 20px"}}>
                    <MDXProvider components={components}>
                        <MDXRenderer>{mdx.body}</MDXRenderer>
                    </MDXProvider>
                </div>
            </article>
            <div style={{textAlign: "center"}}>
                <div style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
                    Written with ❤️ using my&nbsp;<Link className="GemsLink" to="/">Gems</Link>&nbsp;notes
                </div>
            </div>
        </Layout>
    )
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      timeToRead
      frontmatter {
        title
        description
        date
        author
        slug
        banner {
            childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH)
            }
        }
      }
    }
  }
`