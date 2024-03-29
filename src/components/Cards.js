import React from "react"
import { css } from '@emotion/react'
import Card from "./Card"
import { Link } from "gatsby"
import { bpMinMD } from "../lib/breakpoints"

function Cards({items}) {
    return(
        <div css={css`
            ${bpMinMD} {
              padding-top: 20px;
              display: grid;
              grid-template-columns: 1fr 1fr 1fr;
              gap: 32px;
            }
          `}>
              {
                  items.map(({ node: post }) => {
                      return <div key={post.frontmatter.slug}>
                          <Link style={{textDecoration: 'none'}} to={`/article/${post.frontmatter.slug}`}>
                              <Card
                                title={post.frontmatter.title}  
                                preview={post.frontmatter.description}
                                image={post.frontmatter.banner.childImageSharp.gatsbyImageData} />
                          </Link>
                      </div>
                  })
              }
          </div>
    )
}

export default Cards