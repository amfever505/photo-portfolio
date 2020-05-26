import React, { useEffect, useState } from "react"

import Container from "../container/container"
import thumbnailStyles from "./thumbnail.module.css"

import { getImageURLFromDatabase } from "../../firebase/api"

export default function Thumbnail(props) {
  const path = window.location.pathname.substr(1)
  // =>瀏覽器該頁面的名稱‘/...../’也就是相簿名稱
  const [photoList, setPhotoList] = useState([])

  useEffect(() => {
    getImageURLFromDatabase(path).then(snapshot => {
      const data = Object.values(snapshot.val())
      console.log(data)
      setPhotoList(data)
    })
  }, [])

  return (
    <Container>
      <div className={thumbnailStyles.root}>
        {photoList.map(photo => (
          <div
            className={thumbnailStyles.thumbnail}
            style={{ backgroundImage: `url(${photo.thumbnail})` }}
          >
            <img></img>
          </div>
        ))}
      </div>
    </Container>
  )
}
