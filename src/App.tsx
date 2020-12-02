import React, { useState } from 'react'
import usePhotoData from './uses/usePhotoData'
import { PhotoList } from './components'
import { Header } from './components/Header'

function App() {
  const [text, setText] = useState('')
  const [query, setQuery] = useState('louvre')

  const photos = usePhotoData(query)

  return (
    <>
      <Header text={text} setText={setText} setQuery={setQuery} />
      <main>
        <PhotoList photos={photos} />
      </main>
    </>
  )
}

export default App
