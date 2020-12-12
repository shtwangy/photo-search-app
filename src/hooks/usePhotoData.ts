import { useState, useEffect } from 'react'
import Photo from '../types/Photo'
import getPhotos from '../api/PhotoAPI'

interface usePhotoDataResponse {
  photos: Photo[]
  error: boolean
  hasMore: boolean
  loading: boolean
}

const usePhotoData = (query: string, page: number): usePhotoDataResponse => {
  const [photos, setPhotos] = useState([] as Photo[])
  const [error, setError] = useState(false)
  const [hasMore, setHasMore] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setPhotos([])
  }, [query])

  useEffect(() => {
    setLoading(true)
    setError(false)
    getPhotos(query, page)
      .then((res) => {
        setPhotos((p: Photo[]): Photo[] => {
          return [...p, ...res]
        })
        setHasMore(res.length > 0)
        setLoading(false)
      })
      .catch(() => {
        setError(true)
      })
  }, [query, page])

  return { photos, error, hasMore, loading }
}

export default usePhotoData