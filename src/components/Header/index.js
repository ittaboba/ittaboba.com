import React from 'react'
import { Link } from 'gatsby'
import { css } from '@emotion/react'
import { useTheme } from '../Theming'
import { bpMaxSM, bpMaxMD } from '../../lib/breakpoints'
import MobileMenu from './MobileMenu'
import Links from './Links'

import Container from '../Container'

const Header = () => {
  const theme = useTheme()
  return (
    <header
      css={css`
        position: fixed;
        z-index: 2;
        width: 100%;
        flex-shrink: 0;
        background: none;
        padding: 20px 0;
        background: ${theme.colors.headerBg};
        &:after {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          top: 100%;
          height: 4px;
          background: linear-gradient(180deg,rgba(9,30,66,.13),rgba(9,30,66,.13) 1px,rgba(9,30,66,.08) 0,rgba(9,30,66,0) 4px);
        }
      `}
    >
      <Container noVerticalPadding>
        <nav
          css={css`
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
          `}
        >
          <Link css={css`
              font-size: 16px;
              font-weight: bold;
              color: ${theme.colors.text};
              text-decoration: none;
              &:hover {
                text-decoration: none;
                color: ${theme.colors.red};
              }
            `} to="/">
              <div css={css`
                display: flex;
                justify-content: start;
                ${bpMaxMD} {
                  justify-content: center;
                }
              `}>
                <img
                    src={theme.logo}
                    width="40"
                    height="40"
                    alt="Lorenzo Bernaschina's logo"
                    css={css`
                      margin-bottom: 0;
                    `}
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
          <div
            css={css`
              font-size: 16px;
              line-height: 1.25;
              display: flex;
              align-items: center;
              a {
                text-decoration: none;
                color: ${theme.colors.gray};
                margin-left: 16px;
                margin-right: 16px;
              }
              .active {
                display: none;
                visibility: hidden;
              }
            `}
          >
            <div
              css={css`
                display: flex;
                align-items: center;
                ${bpMaxSM} {
                  display: none;
                }
                a {
                  text-decoration: none;
                  color: ${theme.colors.text};
                  &:hover {
                    color: ${theme.colors.red};
                  }
                }
              `}
            >
              <Links />
            </div>
            <MobileMenu>
              <Links />
            </MobileMenu>
          </div>
        </nav>
      </Container>
    </header>
  )
}

export default Header
