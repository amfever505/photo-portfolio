import React from "react"
import Container from "./container/container"

export default function Header(props) {
  return (
    <Container>
      <h2 style={{ marginTop: "60px" }}>{props.headerText}</h2>
    </Container>
  )
}
