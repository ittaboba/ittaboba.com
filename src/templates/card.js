import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { css } from '@emotion/core'

function Card({title, preview, image}) {
    return (
        <div css={css`
            height: 100%;
            overflow: hidden;
            border: 2px solid gainsboro;
            box-sizing: border-box;
            position: relative;
            cursor: pointer;
            z-index: 1;
            justify-self: center;
            backface-visibility: hidden;
            transform: translate3d(0px, 0px, 0px);
            border-radius: 1em;
            transition: all 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) 0s;
            margin-bottom: 2em;
            &:hover {
                box-shadow: rgba(0, 0, 0, 0.25) 0px 30px 60px;
                transform: scale(1.03, 1.03);
                transition: all 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) 0s;
            }
        `}>
            <GatsbyImage css={css`
                position: relative;
                background-repeat: no-repeat;
                background-size: cover;
                background-position: center;
                height: 10em;
                overflow: hidden;
            `} alt="" image={image} />
            <h2 css={css`
                font-size: 24px;
                font-weight: 700;
                padding: 10px;
                color: #202020;
            `}>{title}</h2>
            <p css={css`
                font-size: 16px;
                padding: 0 10px;
                color: #676767;
            `}>{preview}</p>
        </div>
    )
}

export default Card