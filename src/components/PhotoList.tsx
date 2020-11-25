import React, {FC} from 'react';
import Photo from "../types/Photo";
import {makeStyles} from "@material-ui/core/styles";
import {PhotoCard} from "./index";

interface Props {
    photos: Photo[]
}

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexFlow: 'row wrap',
    },
});

const PhotoList: FC<Props> = (props: Props) => {
    const classes = useStyles();
    const photos = props.photos;
    return (
        <div className={classes.root}>
            {
                photos.length > 0 && (
                    photos.map(photo =>
                        <PhotoCard key={photo.id} photo={photo}/>
                    )
                )
            }
        </div>
    );
};

export default PhotoList;
