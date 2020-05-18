import React from "react"
import Container from "./container/container"

export default function Subtitle(props) {
  return (
    <Container>
      <h5>{props.subtitleText}</h5>
    </Container>
  )
}
