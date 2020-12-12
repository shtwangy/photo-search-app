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
      <div className={classes.progressCircle}>
        {loading && <CircularProgress />}
      </div>
      <div>{error && 'Error!!'}</div>
    </>
  )
}

export default App
