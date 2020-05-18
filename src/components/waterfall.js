import React from "react"
import "../assets/css/layout.css"
import { Link } from "gatsby"

import Aboutcover from "../assets/images/albumcover/about.jpg"
import RozenMaidencover from "../assets/images/albumcover/RozenMaiden.jpg"
import C97cover from "../assets/images/albumcover/C97.jpg"
import Jinnbutu1cover from "../assets/images/albumcover/jinnbutu1.jpg"
import NightPortraitcover from "../assets/images/albumcover/NightPortrait.jpg"
import Landscapecover from "../assets/images/albumcover/Landscape.jpg"
import Jinnbutu2cover from "../assets/images/albumcover/jinnbutu2.jpg"

import AlbumItem from "./albumItem/albumItem"

export default function Waterfall(props) {
  return (
    <div className="container">
      <div className="root">
        <div className="itemCol">
          <AlbumItem
            type={1}
            url={Aboutcover}
            linkTo="/about/"
            linkText="About me >"
          ></AlbumItem>

          <AlbumItem
            type={2}
            url={RozenMaidencover}
            linkTo="/RozenMaiden/"
            linkText="ローゼンメイデン >"
          ></AlbumItem>
          <AlbumItem
            type={3}
            url={C97cover}
            linkTo="/C97/"
            linkText="C97二日目 >"
          ></AlbumItem>
        </div>
        <div className="itemCol">
          <AlbumItem
            type={3}
            url={Jinnbutu1cover}
            linkTo="/Jinnbutu1/"
            linkText="人物写真その1 >"
          ></AlbumItem>
          <AlbumItem
            type={1}
            url={Jinnbutu2cover}
            linkTo="/Jinnbutu2/"
            linkText="人物写真その2 >"
          ></AlbumItem>

          <AlbumItem
            type={2}
            url={NightPortraitcover}
            linkTo="/NightPortrait/"
            linkText="夜ポートレート >"
          ></AlbumItem>
        </div>
        <div className="itemCol">
          <div className="itemType2"></div>
          <div className="itemType3"></div>
          <div className="itemType1"></div>
        </div>
        <div className="itemCol">
          <AlbumItem
            type={1}
            url={Landscapecover}
            linkTo="/Landscape/"
            linkText="ランドスケープ >"
          ></AlbumItem>
          <AlbumItem type={2} linkText="工事中..."></AlbumItem>
          <AlbumItem
            type={3}
            linkTo="/others/"
            linkText="その他作品 >"
          ></AlbumItem>
        </div>
      </div>
    </div>
  )
}
