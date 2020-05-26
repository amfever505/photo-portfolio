import firebase from "gatsby-plugin-firebase"

const storage = firebase.storage()
const database = firebase.database()

const storageRef = storage.ref()
const albumListRef = database.ref("album-list")

const writeImageURLToDatabase = (imageRef, albumRef) => {
  const itemRefOnDatabase = albumListRef
    .child(albumRef.name)
    .child(imageRef.name)
  //.child是database中照片資料儲存位置的路徑
  imageRef.listAll().then(imageRes => {
    // index: 0 = original, index: 1 = thumbnail
    imageRes.items.forEach((itemRef, index) => {
      itemRef.getDownloadURL().then(url => {
        switch (index) {
          //在itemRefOnDatabase這個路徑下更新一個項目
          case 0: {
            itemRefOnDatabase.update({ original: url })
            break
          }
          case 1: {
            itemRefOnDatabase.update({ thumbnail: url })
            break
          }
          default:
            break
        }
      })
    })
  })
}

// update image url script
export const updateGallery = () => {
  storageRef
    .listAll()
    .then(res => {
      // refenence to album
      res.prefixes.forEach(albumRef => {
        albumRef.listAll().then(albumRes => {
          // reference to image

          albumRes.prefixes.forEach(imageRef => {
            writeImageURLToDatabase(imageRef, albumRef)
          })
        })
      })
    })
    .catch(err => console.log(err))
}
updateGallery()
export const getImageURLFromDatabase = albumName => {
  return albumListRef.child(albumName).once("value")
}
