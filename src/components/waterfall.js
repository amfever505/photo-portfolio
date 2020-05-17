import React from "react"
import "../assets/css/layout.css"
import { Link } from "gatsby"

import Aboutcover from "../assets/images/albumcover/about.jpg"
import RozenMaidencover from "../assets/images/albumcover/RozenMaiden.jpg"

export default function Waterfall(props) {
  return (
    <div className="container">
      <div className="root">
        <div className="itemCol">
          <div
            className="itemType1"
            style={{ backgroundImage: `url(${Aboutcover})` }}
          >
            <Link className="linkButton" to="/about/">
              About me >
            </Link>
          </div>
          <div
            className="itemType2"
            style={{ backgroundImage: `url(${RozenMaidencover})` }}
          ></div>
          <div className="itemType3"></div>
        </div>
        <div className="itemCol">
          <div className="itemType3"></div>
          <div className="itemType1"></div>
          <div className="itemType2"></div>
        </div>
        <div className="itemCol">
          <div className="itemType2"></div>
          <div className="itemType3"></div>
          <div className="itemType1"></div>
        </div>
        <div className="itemCol">
          <div className="itemType1"></div>
          <div className="itemType2"></div>
          <div className="itemType3"></div>
        </div>
      </div>
    </div>
  )
}
