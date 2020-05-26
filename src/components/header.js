import React from "react"

import Container from "./container/container"
import headerStyles from "./header.module.css"
import { Link } from "gatsby"

export default function Header(props) {
  const { titleText, subtitleText, url } = props

  return (
    <Container>
      <div
        className={headerStyles.header}
        style={{
          backgroundImage: `url(${url})`,
        }}
      >
        <div className={headerStyles.menu}>
          <a href="#popup-overlay" className={headerStyles.menuToggle}>
            <span></span>
            <span></span>
            <span></span>
          </a>
          <div id="popup-overlay" className={headerStyles.popupMenu}>
            <Container>
              <a href="#" className={headerStyles.popupClose}>
                <span></span>
                <span></span>
                <span></span>
              </a>
              <ul className={headerStyles.linkList}>
                <li>
                  <Link to="//" className={headerStyles.popupItem}>
                    <h5>Home</h5>
                  </Link>
                </li>
                <li>
                  <Link to="/about/" className={headerStyles.popupItem}>
                    <h5>About me</h5>
                  </Link>
                </li>
                <li>
                  <Link to="/RozenMaiden/" className={headerStyles.popupItem}>
                    <h5>ローゼンメイデン</h5>
                  </Link>
                </li>
                <li>
                  <Link to="/C97/" className={headerStyles.popupItem}>
                    <h5>C97二日目</h5>
                  </Link>
                </li>
                <li>
                  <Link to="/Jinnbutu1/" className={headerStyles.popupItem}>
                    <h5>人物写真その1</h5>
                  </Link>
                </li>
                <li>
                  <Link to="/Jinnbutu2/" className={headerStyles.popupItem}>
                    <h5>人物写真その2</h5>
                  </Link>
                </li>
                <li>
                  <Link to="/NightPortrait/" className={headerStyles.popupItem}>
                    <h5>夜ポートレート</h5>
                  </Link>
                </li>
                <li>
                  <Link to="/DancePortrait/" className={headerStyles.popupItem}>
                    <h5>アーティスト</h5>
                  </Link>
                </li>
                <li>
                  <Link to="/OtherCosplay/" className={headerStyles.popupItem}>
                    <h5>コスプレテーマその他</h5>
                  </Link>
                </li>
                <li>
                  <Link to="/Film/" className={headerStyles.popupItem}>
                    <h5>フィルム</h5>
                  </Link>
                </li>
                <li>
                  <Link to="/Landscape/" className={headerStyles.popupItem}>
                    <h5>ランドスケープ</h5>
                  </Link>
                </li>
                <li>
                  <Link to="/others/" className={headerStyles.popupItem}>
                    <h5>その他作品</h5>
                  </Link>
                </li>
              </ul>
            </Container>
          </div>
        </div>
        <h2>{titleText}</h2>
        <h5>{subtitleText}</h5>
      </div>
    </Container>
  )
}
