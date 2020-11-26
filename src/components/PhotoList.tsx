import React, {FC} from 'react';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Photo from "../types/Photo";
import {makeStyles} from "@material-ui/core/styles";
import {PhotoCard} from "./index";

interface Props {
    photos: Photo[]
}

const useStyles = makeStyles((theme) => ({
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
}));

const PhotoList: FC<Props> = (props: Props) => {
    const classes = useStyles();
    const photos = props.photos;
    return (
        <Container className={classes.cardGrid} maxWidth='md'>
            <Grid container spacing={2}>
                {
                    photos.length > 0 && (
                        photos.map(photo =>
                            <Grid item key={photo.id} xs={12} sm={6} md={4}>
                                <PhotoCard photo={photo}/>
                            </Grid>
                        )
                    )
                }
            </Grid>
        </Container>
    );
};

export default PhotoList;
