import React from "react"

import Header from "../components/header"
import Subtitle from "../components/subtitle"
import Waterfall from "../components/waterfall"
import Footer from "../components/footer"
export default function Home() {
  return (
    <div>
      <Header headerText="Kasumi's portfolio" />
      <Subtitle subtitleText="かすみのポートフォリオ" />
      <Waterfall />
      <Footer />
    </div>
  )
}
