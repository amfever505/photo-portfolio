import React from "react"
import "../assets/css/layout.css"

export default function Subtitle(props) {
  return (
    <div className="container">
      <h4>{props.subtitleText}</h4>
    </div>
  )
}
