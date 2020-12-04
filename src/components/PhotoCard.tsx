import React, { FC } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import Chip from '@material-ui/core/Chip'
import Photo from '../types/Photo'

interface Props {
  photo: Photo
}

const useStyles = makeStyles({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  media: {
    paddingTop: '56.25%', // 16:9
  },
})

const PhotoCard: FC<Props> = (props: Props) => {
  const classes = useStyles()
  const { photo } = props
  return (
    <div>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={photo.url}
          title={photo.altDescription}
        />
      </Card>
      <Chip label="Basic" />
      <Chip label="Basic" />
      <Chip label="Basic" />
      <Chip label="Basic" />
    </div>
  )
}

export default PhotoCard
