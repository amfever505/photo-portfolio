import React from "react"
import "../assets/css/layout.css"
import { Link } from "gatsby"
import Container from "./container/container"

import Portrait from "../assets/images/about/Portrait.jpg"

export default function AboutMe(props) {
  return (
    <Container>
      <div className="row">
        <div className="twoCol">
          <div className="contentBox">
            <h3>About</h3>
            <br />
            -------------------
            <br />
            <br />
            <p>1994年台湾生まれ。</p>
            <br />
            <p>
              大学の時に自分のデジタルカメラを入手してから、一つの趣味としてデジタル撮影をしております。
              <br />
              今独学でWEB制作を学んでおりますので、これを機に自分のポートフォリオ作ってみました。
            </p>
          </div>
          <div className="iconBox">
            <a href="https://github.com/amfever505/">
              <div className="icon gitIcon"></div>
            </a>
            <a href="https://www.linkedin.com/in/tzu-yin-chen/">
              <div className="icon linkedinIcon"></div>
            </a>
            <a href="https://www.plurk.com/kasumi26">
              <div className="icon plurkIcon"></div>
            </a>
          </div>
        </div>
        <div className="twoCol">
          <div
            className="imgBox"
            style={{ backgroundImage: `url(${Portrait})` }}
          ></div>
        </div>
      </div>
    </Container>
  )
}
