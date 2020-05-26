import React from "react"
import { Link } from "gatsby"

export default function albumItem(props) {
  const { type, url, linkTo, linkText } = props

  return (
    <Link to={linkTo}>
      <div className={`itemType${type}`}>
        <div
          className="albumCover"
          style={{ backgroundImage: `url(${url})` }}
        />
        <h4 className="linkButton">{linkText}</h4>
      </div>
    </Link>
  )
}
