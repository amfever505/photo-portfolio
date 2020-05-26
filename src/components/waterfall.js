import React from "react"
import "../assets/css/layout.css"
import { Link } from "gatsby"
import Container from "./container/container"

import Aboutcover from "../assets/images/albumcover/about.jpg"
import RozenMaidencover from "../assets/images/albumcover/RozenMaiden.jpg"
import C97cover from "../assets/images/albumcover/C97.jpg"
import Jinnbutu1cover from "../assets/images/albumcover/jinnbutu1.jpg"
import NightPortraitcover from "../assets/images/albumcover/NightPortrait.jpg"
import Landscapecover from "../assets/images/albumcover/Landscape.jpg"
import Jinnbutu2cover from "../assets/images/albumcover/jinnbutu2.jpg"
import OtherCosplaycover from "../assets/images/albumcover/OtherCosplay.jpg"
import DancePortraitcover from "../assets/images/albumcover/DancePortrait.jpg"
import Filmcover from "../assets/images/albumcover/Film.jpg"

import AlbumItem from "./albumItem/albumItem"

export default function Waterfall(props) {
  return (
    <Container>
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
            linkTo="RozenMaiden"
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
          <AlbumItem
            type={2}
            url={DancePortraitcover}
            linkTo="/DancePortrait/"
            linkText="アーティスト >"
          ></AlbumItem>
          <AlbumItem
            type={3}
            url={OtherCosplaycover}
            linkTo="/OtherCosplay/"
            linkText="コスプレテーマその他 >"
          ></AlbumItem>
          <AlbumItem
            type={1}
            url={Filmcover}
            linkTo="/Film/"
            linkText="フィルム >"
          ></AlbumItem>
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
    </Container>
  )
}
