import {useState, useEffect} from "react";
import Image from "../types/image";
import {getPhotos} from "../api/PhotoAPI";

export const usePhotoData = (query: string) => {
    const [photos, setPhotos] = useState([] as Image[]);

    useEffect(() => {
        if (query) {
            getPhotos(query)
                .then(res => {
                    console.log(res);
                    setPhotos(res);
                    console.log(photos);
                })
                .catch((err) => {
                    console.error(err);
                });
        }
    }, [query]);

    return photos;
}
