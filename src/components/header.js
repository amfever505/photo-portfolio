import React, { useState } from "react"

import Container from "./container/container"
import headerStyles from "./header.module.css"
import { Link } from "gatsby"
import { ALBUM_LIST } from "../constants/gallery"

export default function Header(props) {
  const { titleText, subtitleText, url } = props
  const [isOpenPopupMenu, setIsOpenPopupMenu] = useState(false)
  const handleOpenPopupMenu = index => {
    setIsOpenPopupMenu(true)
    console.log(setIsOpenPopupMenu)
  }

  const handleClosePopupMenu = () => {
    setIsOpenPopupMenu(false)
  }

  return (
    <Container>
      <div
        className={headerStyles.header}
        style={{
          backgroundImage: `url(${url})`,
        }}
      >
        <div className={headerStyles.menu}>
          <a
            href="#"
            className={headerStyles.menuToggle}
            onClick={() => handleOpenPopupMenu()}
          >
            <span></span>
            <span></span>
            <span></span>
          </a>
          {isOpenPopupMenu && (
            <div id="popup-overlay" className={headerStyles.popupMenu}>
              <Container>
                <a
                  href="#"
                  className={headerStyles.popupClose}
                  onClick={() => handleClosePopupMenu()}
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </a>
                <ul className={headerStyles.linkList}>
                  {ALBUM_LIST.map(linklist => (
                    <li>
                      <Link
                        to={linklist.to}
                        className={headerStyles.popupItem}
                        onClick={() => handleClosePopupMenu()}
                      >
                        <h5>{linklist.title}</h5>
                      </Link>
                    </li>
                  ))}

                  {/* <li>
                    <Link
                      to={ALBUM_LIST[0].to}
                      className={headerStyles.popupItem}
                      onClick={() => handleClosePopupMenu()}
                    >
                      <h5>{ALBUM_LIST[0].title}</h5>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={ALBUM_LIST[1].to}
                      className={headerStyles.popupItem}
                      onClick={() => handleClosePopupMenu()}
                    >
                      <h5>{ALBUM_LIST[1].title}</h5>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/gallery?name=RozenMaiden"
                      className={headerStyles.popupItem}
                      onClick={() => handleClosePopupMenu()}
                    >
                      <h5>ローゼンメイデン</h5>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/gallery?name=C97"
                      className={headerStyles.popupItem}
                      onClick={() => handleClosePopupMenu()}
                    >
                      <h5>C97二日目</h5>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/gallery?name=Jinnbutu1"
                      className={headerStyles.popupItem}
                      onClick={() => handleClosePopupMenu()}
                    >
                      <h5>人物写真その1</h5>
                    </Link>
                  </li>
                  <li>
                    <Link to="/Jinnbutu2/" className={headerStyles.popupItem}>
                      <h5>人物写真その2</h5>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/NightPortrait/"
                      className={headerStyles.popupItem}
                    >
                      <h5>夜ポートレート</h5>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/DancePortrait/"
                      className={headerStyles.popupItem}
                    >
                      <h5>アーティスト</h5>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/OtherCosplay/"
                      className={headerStyles.popupItem}
                    >
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
                  </li> */}
                </ul>
              </Container>
            </div>
          )}
        </div>
        <h2>{titleText}</h2>
        <h5>{subtitleText}</h5>
      </div>
    </Container>
  )
}
