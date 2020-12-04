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
  photoChip: {
    margin: '5px',
    fontSize: '3px',
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
      <div>
        {photo.tags.length > 0 &&
          photo.tags.map((tag) => (
            <Chip
              key={tag.title}
              className={classes.photoChip}
              label={tag.title}
            />
          ))}
      </div>
    </div>
  )
}

export default PhotoCard
