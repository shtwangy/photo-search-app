import { useState, useEffect } from 'react'
import Photo from '../types/Photo'
import getPhotos from '../api/PhotoAPI'

const usePhotoData = (query: string): Photo[] => {
  const [photos, setPhotos] = useState([] as Photo[])

  useEffect(() => {
    if (query) {
      getPhotos(query)
        .then((res) => {
          console.log(res)
          setPhotos(res)
        })
        .catch((err) => {
          console.error(err)
        })
    }
  }, [query])

  return photos
}

export default usePhotoData
