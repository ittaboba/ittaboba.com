import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { GatsbyImage } from "gatsby-plugin-image"
import { css } from '@emotion/react'
import Seo from "../components/seo"
import Slider from "react-slick";

import components from "../components/mdx"
import Layout from "../components/Layout"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Container from "../components/Container"
import { bpMinSM } from "../lib/breakpoints"

export default function About({data:{mdx, image1, image2, image3, image4, image5, image6}}) {
    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 545,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    }
    
    return (
        <Layout>
            <Seo 
            title={mdx.frontmatter.title}
            description={mdx.frontmatter.description}
            image={image1.childImageSharp.gatsbyImageData.images.fallback.src}
            path={`/${mdx.frontmatter.slug}`} />
            <Container>
                <Slider {...settings}>
                    <div css={css`
                        ${bpMinSM} {
                            padding: 0 10px;
                        }
                    `}>
                        <GatsbyImage css={css`
                            border-radius: 1em;
                            overflow: hidden;
                        `} alt={""} image={image1.childImageSharp.gatsbyImageData} />
                    </div>
                    <div css={css`
                        ${bpMinSM} {
                            padding: 0 10px;
                        }
                    `}>
                        <GatsbyImage css={css`
                            border-radius: 1em;
                            overflow: hidden;
                        `} alt={""} image={image2.childImageSharp.gatsbyImageData} />
                    </div>
                    <div css={css`
                        ${bpMinSM} {
                            padding: 0 10px;
                        }
                    `}>
                        <GatsbyImage css={css`
                            border-radius: 1em;
                            overflow: hidden;
                        `} alt={""} image={image3.childImageSharp.gatsbyImageData} />
                    </div>
                    <div css={css`
                        ${bpMinSM} {
                            padding: 0 10px;
                        }
                    `}>
                        <GatsbyImage css={css`
                            border-radius: 1em;
                            overflow: hidden;
                        `} alt={""} image={image4.childImageSharp.gatsbyImageData} />
                    </div>
                    <div css={css`
                        ${bpMinSM} {
                            padding: 0 10px;
                        }
                    `}>
                        <GatsbyImage css={css`
                            border-radius: 1em;
                            overflow: hidden;
                        `} alt={""} image={image5.childImageSharp.gatsbyImageData} />
                    </div>
                    <div css={css`
                        ${bpMinSM} {
                            padding: 0 10px;
                        }
                    `}>
                        <GatsbyImage css={css`
                            border-radius: 1em;
                            overflow: hidden;
                        `} alt={""} image={image6.childImageSharp.gatsbyImageData} />
                    </div>
                </Slider>
            </Container>
            <article>
                <div style={{padding: "0 20px 20px 20px"}}>
                    <MDXProvider components={components}>
                        <MDXRenderer>{mdx.body}</MDXRenderer>
                    </MDXProvider>
                </div>
            </article>
        </Layout>
    )
}

export const pageQuery = graphql`
  query AboutPostQuery($id: String) {
    mdx(
        id: { eq: $id }
    ) {
      id
      body
      frontmatter {
        title
        description
        date
        author
        slug
      }
    }
    image1: file(relativePath: { eq: "about06.jpg" }) {
        childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
        }
    }
    image2: file(relativePath: { eq: "about03.jpg" }) {
        childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
        }
    }
    image3: file(relativePath: { eq: "about02.jpg" }) {
        childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
        }
    }
    image4: file(relativePath: { eq: "about01.jpg" }) {
        childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
        }
    }
    image5: file(relativePath: { eq: "about04.jpg" }) {
        childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
        }
    }
    image6: file(relativePath: { eq: "about05.jpg" }) {
        childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
        }
    }
  }
`