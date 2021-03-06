import React, { FC, FormEvent } from 'react'
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search'
import { makeStyles } from '@material-ui/core/styles'
import { TextInput } from '../UIKit'

interface Props {
  text: string
  setText: (s: string) => void
  updateQuery: () => void
}

const useStyles = makeStyles({
  searchField: {
    alignItems: 'center',
    display: 'flex',
    marginLeft: 32,
  },
})

const SearchForm: FC<Props> = (props: Props) => {
  const classes = useStyles()
  const { text, setText, updateQuery } = props

  const inputTextHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }

  const searchHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault() // （デフォルトの動作の）画面遷移が発生しないように（https://ja.reactjs.org/docs/handling-events.html）
    updateQuery()
  }

  return (
    <form className={classes.searchField} onSubmit={searchHandler}>
      <TextInput
        fullWidth={false}
        label="キーワードを入力"
        multiline={false}
        required={false}
        rows={1}
        value={text}
        type="search"
        onChange={inputTextHandler}
      />
      <IconButton type="submit" aria-label="search">
        <SearchIcon />
      </IconButton>
    </form>
  )
}

export default SearchForm
