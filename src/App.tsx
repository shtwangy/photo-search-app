import React, { FC, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroller'
import CircularProgress from '@material-ui/core/CircularProgress'
import { makeStyles } from '@material-ui/core/styles'
import usePhotoData from './hooks/usePhotoData'
import { PhotoList } from './components'
import { Header } from './components/Header'

const useStyles = makeStyles({
  progressCircle: {
    textAlign: 'center',
  },
})

const App: FC = () => {
  const classes = useStyles()
  const [text, setText] = useState('')
  const [query, setQuery] = useState('louvre')
  const [page, setPage] = useState(1)

  const { photos, error, hasMore, loading, setPhotos } = usePhotoData(
    query,
    page
  )

  const updateQuery = () => {
    if (text !== query) {
      setQuery(text)
      setPage(1)
      setPhotos([])
    }
  }

  return (
    <>
      <Header text={text} setText={setText} updateQuery={updateQuery} />
      <InfiniteScroll
        pageStart={0}
        loadMore={() => (hasMore ? setPage((prevPage) => prevPage + 1) : {})}
        hasMore={hasMore}
        initialLoad={false}
      >
        <main>
          <PhotoList photos={photos} />
        </main>
      </InfiniteScroll>
      <div className={classes.progressCircle}>
        {loading && <CircularProgress />}
      </div>
      <div>{error && 'Error!!'}</div>
    </>
  )
}

export default App
