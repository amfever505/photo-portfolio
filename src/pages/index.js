import React from "react"

import Header from "../components/header"
import Waterfall from "../components/waterfall"
import Footer from "../components/footer"
import "../firebase/api"

export default function Home() {
  return (
    <div style={{ height: "100vh", overflowY: "hidden" }}>
      <Header titleText="Kasumi's gallery" subtitleText="かすみのギャラリー" />

      <Waterfall />
      <Footer />
    </div>
  )
}
