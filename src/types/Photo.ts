interface Photo {
  altDescription: string
  description: string
  id: string
  tags: {
    type: string
    title: string
  }[]
  url: string
}

export default Photo
