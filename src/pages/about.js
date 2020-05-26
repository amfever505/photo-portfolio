import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import HeaderBG from "../assets/images/albumcover/about.jpg"

import AboutMe from "../components/aboutme"

export default function About() {
  return (
    <div style={{ height: "100vh", overflowY: "hidden" }}>
      <Header titleText="Kasumi's gallery" subtitleText="　　" url={HeaderBG} />
      <AboutMe />
      <Footer />
    </div>
  )
}
