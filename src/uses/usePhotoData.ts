import { useState, useEffect } from 'react'
import Photo from '../types/Photo'
import getPhotos from '../api/PhotoAPI'

const usePhotoData = (query: string, page: number): Photo[] => {
  const [photos, setPhotos] = useState([] as Photo[])

  useEffect(() => {
    setPhotos([])
  }, [query])

  useEffect(() => {
    if (query && page) {
      getPhotos(query, page).then((res) => {
        setPhotos((p: Photo[]): Photo[] => {
          return [...p, ...res]
        })
      })
    }
  }, [query, page])

  return photos
}

export default usePhotoData
