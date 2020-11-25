import React, {FC} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Photo from "../types/Photo";

interface Props {
    photo: Photo
}

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        width: 345,
        height: 345,
    },
});

const PhotoCard: FC<Props> = (props: Props) => {
    const classes = useStyles();
    const photo: Photo = props.photo;
    return (
        <Card className={classes.root}>
            <CardMedia
                className={classes.media}
                image={photo.url}
                title={photo.alt_description}
            />
        </Card>
    );
};

export default PhotoCard;
