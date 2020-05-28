import React, { useEffect, useState } from "react"
import Lightbox from "react-image-lightbox"
import "react-image-lightbox/style.css"

import Container from "../container/container"
import thumbnailStyles from "./thumbnail.module.css"

export default function Thumbnail(props) {
  const { photoList } = props
  const [isOpenLightbox, setIsOpenLightbox] = useState(false)
  const [photoIndex, setPhotoIndex] = useState(0)

  const handleOpenLightbox = index => {
    setIsOpenLightbox(true)
    setPhotoIndex(index)
  }

  const handleCloseLightbox = () => {
    setIsOpenLightbox(false)
  }

  return (
    <Container>
      <div className={thumbnailStyles.root}>
        {photoList.map((photo, idx) => (
          <div
            className={thumbnailStyles.thumbnail}
            style={{ backgroundImage: `url(${photo.thumbnail})` }}
            onClick={() => handleOpenLightbox(idx)}
          ></div>
        ))}
        {isOpenLightbox && (
          <Lightbox
            mainSrc={photoList[photoIndex].original}
            nextSrc={photoList[(photoIndex + 1) % photoList.length].original}
            prevSrc={
              photoList[(photoIndex + photoList.length - 1) % photoList.length]
                .original
            }
            onCloseRequest={handleCloseLightbox}
            onMovePrevRequest={() =>
              setPhotoIndex(
                (photoIndex + photoList.length - 1) % photoList.length
              )
            }
            onMoveNextRequest={() =>
              setPhotoIndex((photoIndex + 1) % photoList.length)
            }
          />
        )}
      </div>
    </Container>
  )
}
