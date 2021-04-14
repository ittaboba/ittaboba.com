import styled from '@emotion/styled'
import { mq } from "./mq"

export default styled.h2`
  ${mq["sm"]} {
    font-size: 26px;
  }
  ${mq["md"]} {
    font-size: 30px;
  }
  ${mq["lg"]} {
    font-size: 35px;
  }
  ${mq["xl"]} {
    font-size: 35px;
  }
  font-weight: 700;
  line-height: 1.1;
  margin: 30px auto 15px auto;
  max-width: 750px;
  font-family: Helvetica Neue;
`
