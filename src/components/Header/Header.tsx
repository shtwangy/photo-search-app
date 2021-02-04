import React, { FC } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { makeStyles } from '@material-ui/core/styles'
import SearchForm from './SearchForm'
import Photo from '../../types/Photo'

interface Props {
  text: string
  setText: (s: string) => void
  setQuery: (s: string) => void
  setPage: (p: number) => void
  setPhotos: (p: Photo[]) => void
}

const useStyles = makeStyles({
  header: {
    opacity: 0.9,
  },
  toolBar: {
    margin: '0 auto',
    maxWidth: 1024,
    width: '100%',
  },
})

const Header: FC<Props> = (props: Props) => {
  const classes = useStyles()
  const { text, setText, setQuery, setPage, setPhotos } = props
  return (
    <AppBar position="fixed" className={classes.header} color="inherit">
      <Toolbar className={classes.toolBar}>
        <p>PHOTO SEARCH APP</p>
        <div className="spacer-horizontal" />
        <SearchForm
          text={text}
          setText={setText}
          setQuery={setQuery}
          setPage={setPage}
          setPhotos={setPhotos}
        />
      </Toolbar>
    </AppBar>
  )
}

export default Header
