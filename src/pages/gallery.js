import React, { useEffect, useState } from "react"
import Header from "../components/header"
import queryString from "query-string"
import { useLocation } from "@reach/router"

import Footer from "../components/footer"
import Thumbnail from "../components/thumbnail/thumbnail"
import { getImageURLFromDatabase } from "../firebase/api"

export default function Gallery() {
  const location = useLocation()
  const { name } = queryString.parse(location.search)
  const [photoList, setPhotoList] = useState([])
  const [albumInfo, setAlbumInfo] = useState({})

  useEffect(() => {
    getImageURLFromDatabase(name).then(snapshot => {
      const data = Object.values(snapshot.val()["gallery"])
      setPhotoList(data)
      setAlbumInfo(snapshot.val()["album-info"])
    })
  }, [name])

  return (
    <div>
      <Header
        titleText={albumInfo.titleText}
        subtitleText={albumInfo.subtitleText}
      />

      <Thumbnail photoList={photoList} />

      <Footer />
    </div>
  )
}
