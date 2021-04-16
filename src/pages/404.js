import React from 'react'
import { css } from '@emotion/react'
import { useTheme } from "../components/Theming"
import { bpMinLG, bpMinMD, bpMinSM } from '../lib/breakpoints'
import Layout from '../components/Layout'

const NotFound = () => {
  const themes = useTheme()
  return(
    <Layout>
      <div css={css`
        display: table; 
        top: 0px;
        left: 0px;
        width: 100%;
        height: 80vh;
        margin: 0 auto;
        text-align: center;
        z-index: 1;
      `}>
        <div css={css`
          display: table-cell;
          vertical-align: middle;
          width: 100%;
          font-family: "Helvetica Neue";
          font-size: 30px;
          color: ${themes.colors.text};
        `}>
            <h1 css={css`
              font-weight: 600;
              ${bpMinSM} {
                font-size: 100px;
              }
              ${bpMinMD} {
                font-size: 200px;
              }
              ${bpMinLG} {
                font-size: 300px;
              }
            `}>404</h1>
        </div>
      </div> 
    </Layout>
  )
}
  

export default NotFound