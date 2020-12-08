import { useState, useEffect } from 'react'
import Photo from '../types/Photo'
import getPhotos from '../api/PhotoAPI'

const usePhotoData = (
  query: string,
  page: number
): { photos: Photo[]; error: boolean } => {
  const [photos, setPhotos] = useState([] as Photo[])
  const [error, setError] = useState(false)

  useEffect(() => {
    setPhotos([])
  }, [query])

  useEffect(() => {
    getPhotos(query, page)
      .then((res) => {
        setPhotos((p: Photo[]): Photo[] => {
          return [...p, ...res]
        })
      })
      .catch(() => {
        setError(true)
      })
  }, [query, page])

  return { photos, error }
}

export default usePhotoData
