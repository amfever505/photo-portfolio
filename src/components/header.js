import React, { useState } from "react"

import Container from "./container/container"
import headerStyles from "./header.module.css"
import { Link } from "gatsby"
import { ALBUM_LIST } from "../constants/gallery"
import HeaderBG from "../assets/images/about/headerBG.jpg"

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
        // style={{
        //   backgroundImage: `url(${url})`,
        // }}
      >
        <div className={headerStyles.scrollViewInner}>
          <div
            style={{ backgroundImage: `url(${url})` }}
            className={headerStyles.scrollView}
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
                    </ul>
                  </Container>
                </div>
              )}
            </div>
            <h2>{titleText}</h2>
            <h5>{subtitleText}</h5>
          </div>
        </div>
      </div>
    </Container>
  )
}
