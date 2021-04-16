import React from "react"

const InlineCode = ({ children }) => (
  <code style={{ background: "#00000018", padding: "0 0.2rem" }}>
    {children}
  </code>
)

export default InlineCode