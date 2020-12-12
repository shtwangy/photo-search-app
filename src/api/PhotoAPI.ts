import Photo from '../types/Photo'

interface UnsplashAPIResponse {
  results: {
    alt_description: string
    description: string
    id: string
    tags: {
      type: string
      title: string
    }[]
    urls: {
      regular: string
    }
  }[]
}

const getPhotos = async (query: string, page: number): Promise<Photo[]> => {
  const ret = await fetch(
    `https://api.unsplash.com/search/photos?query=${query}&page=${page}&client_id=${process.env.REACT_APP_CLIENT_ID}`
  )
    .then((res) => res.json())
    .then((data: UnsplashAPIResponse) => {
      const images: Photo[] = []
      data.results.forEach((res) => {
        const image: Photo = {
          altDescription: res.alt_description,
          description: res.description,
          id: res.id,
          tags: res.tags,
          url: res.urls.regular,
        }
        images.push(image)
      })
      return images
    })

  return ret
}

export default getPhotos
