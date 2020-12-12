import React, { FC, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroller'
import usePhotoData from './hooks/usePhotoData'
import { PhotoList } from './components'
import { Header } from './components/Header'

const App: FC = () => {
  const [text, setText] = useState('')
  const [query, setQuery] = useState('louvre')
  const [page, setPage] = useState(1)

  const { photos, error, hasMore, loading } = usePhotoData(query, page)

  return (
    <>
      <Header
        text={text}
        setText={setText}
        setQuery={setQuery}
        setPage={setPage}
      />
      <InfiniteScroll
        pageStart={0}
        loadMore={() => setPage(page + 1)}
        hasMore={hasMore}
        initialLoad={false}
      >
        <main>
          <PhotoList photos={photos} />
        </main>
      </InfiniteScroll>
      <div>{loading && 'Loading...'}</div>
      <div>{error && 'Error!!'}</div>
    </>
  )
}

export default App
