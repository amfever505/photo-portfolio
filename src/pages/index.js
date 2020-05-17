import React from "react"
import { Link } from "gatsby"

import "../assets/css/font.css"
import Header from "../components/header"

export default function Home() {
  return (
    <div style={{ color: "#666" }}>
      <Header headerText="Kasumi's portfolio" />
      <p>かすみのポートフォリオ</p>
      <Link to="/about/">click to about me</Link>
    </div>
  )
}
