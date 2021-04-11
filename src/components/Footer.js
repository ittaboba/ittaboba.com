import React from 'react'
import { css } from '@emotion/core'
import { bpMaxMD, bpMaxSM, bpMinSM } from '../lib/breakpoints'
import SubscribeForm from './Forms/Subscribe'
import { Twitter, GitHub } from './Social'
import Container from './Container'
import Link from '../components/Link'

const Footer = () => (
  <footer>
    <div
      css={css`
        background-color: black;
        height: 201px;
        width: 100%;
        ${bpMaxSM} {
          height: 405px;
        }
      `}
    >
      <div css={css`
        max-width: 680px;
        margin-left: auto;
        margin-right: auto;
      `}>
          <div css={css`
            text-align: center;
            ${bpMinSM} {
              display: flex;
              align-items: center;
              justify-content: space-between;
            }
          `}>
              <Link css={css`
                  font-size: 16px;
                  color: white;
                  font-family: "Helvetica Neue";
                  font-weight: bold;
                `} to="/">
                  <div css={css`
                    display: row;
                    justify-content: start;
                    ${bpMaxMD} {
                      justify-content: center;
                    }
                  `}>
                    <img
                        style={{color: 'white'}}
                        src="/logo-light.svg"
                        width="50"
                        height="50"
                        className="d-inline-block align-top"
                        alt="Lorenzo Bernaschina's logo"
                        />
                    <div css={css`
                      ${bpMaxSM} {
                        display: none;
                      }
                    `}>
                        ittaboba.com
                    </div>
                  </div>
              </Link>
              <Link css={css`
                display: block;
              `} to="/essays">Essays</Link>

              <Link css={css`
                display: block;
              `} to="/essays">Essays</Link>

              <Link css={css`
                display: block;
              `} to="/essays">Essays</Link>

              <Link css={css`
                display: block;
              `} to="/essays">Essays</Link>
          </div>
          <p css={css`
              color: white;
              text-align: center;
            `}>Follow on</p>
          {/* 
          <Row className="justify-content-center SocialArea">
              
              <a className="SocialButton" onClick={() => eventTracking('Social', 'Visited social newtork profile from Footer', 'Visited Reddit')} href="https://www.reddit.com/user/ittaboba" target="_blank" rel="noopener noreferrer">
                  <p className="icon-reddit-alien"></p>
              </a>

              <a className="SocialButton" onClick={() => eventTracking('Social', 'Visited social newtork profile from Footer', 'Visited Twitter')} href="https://twitter.com/Ittaboba" target="_blank" rel="noopener noreferrer">
                  <p className="icon-twitter"></p>
              </a>

              <a className="SocialButton" onClick={() => eventTracking('Social', 'Visited social newtork profile from Footer', 'Visited Linkedin')} href="https://www.linkedin.com/in/lorenzo-bernaschina-669a08b9/" target="_blank" rel="noopener noreferrer">
                  <p className="icon-linkedin"></p>
              </a>

              <a className="SocialButton" onClick={() => eventTracking('Social', 'Visited social newtork profile from Footer', 'Visited Indie Hackers')} href="https://www.indiehackers.com/ittaboba" target="_blank" rel="noopener noreferrer">
                  <p className="icon-indiehackerslogo"></p>
              </a>

              <a className="SocialButton" onClick={() => eventTracking('Social', 'Visited social newtork profile from Footer', 'Visited Github')} href="https://github.com/ittaboba" target="_blank" rel="noopener noreferrer">
                  <p className="icon-github-circled"></p>
              </a>
          </Row> */}
      </div>
      {/* <div
        css={css`
          
          ${bpMinSM} {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
        `}
      >
        <p>test</p>
        <p>test2</p>
        <p>test3</p>
        <p>test4</p>
      </div> */}
    </div>
  </footer>
)

export default Footer
