import styled from '@emotion/styled'
import { mq } from "./mq"

export default styled.h3`
  ${mq["sm"]} {
    font-size: 20px;
  }
  ${mq["md"]} {
    font-size: 24px;
  }
  ${mq["lg"]} {
    font-size: 28px;
  }
  ${mq["xl"]} {
    font-size: 28px;
  }
  font-weight: 700;
  line-height: 1.1;
  margin: 30px auto 15px auto;
  max-width: 750px;
  font-family: Helvetica Neue;
`
