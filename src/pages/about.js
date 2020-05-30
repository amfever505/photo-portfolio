import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import HeaderBG from "../assets/images/about/headerBG.jpg"

import AboutMe from "../components/aboutme"

export default function About() {
  return (
    <div>
      <Header titleText="Kasumi's gallery" subtitleText="　　" url={HeaderBG} />
      <AboutMe />
      <Footer />
    </div>
  )
}
