import styled from '@emotion/styled'
import { mq } from "./mq"

export default styled.ul`
    ${mq["sm"]} {
        font-size: 16px;
    }
    ${mq["md"]} {
        font-size: 18px;
    }
    ${mq["lg"]} {
        font-size: 18px;
    }
    ${mq["xl"]} {
        font-size: 18px;
    }
    letter-spacing: 0.01rem;
    font-weight: 400;
    font-style: normal;
    line-height: 1.9;
    font-family: 'Merriweather';
    max-width: 750px;
    margin: 30px auto;
`