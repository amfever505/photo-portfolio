import React from "react"
import Header from "../components/header"

import Footer from "../components/footer"
import Thumbnail from "../components/thumbnail/thumbnail"
import Container from "../components/container/container"
export default function RozenMaiden() {
  return (
    <div>
      <Header
        titleText="ローゼンメイデン"
        subtitleText="コスプレテーマの撮影会"
      />

      <Thumbnail />

      <Footer />
    </div>
  )
}
