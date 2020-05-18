import React from "react"
import { Link } from "gatsby"

export default function albumItem(props) {
  const { type, url, linkTo, linkText } = props

  return (
    <div
      className={`itemType${type}`}
      style={{ backgroundImage: `url(${url})` }}
    >
      <Link className="linkButton" to={linkTo}>
        {linkText}
      </Link>
    </div>
  )
}
