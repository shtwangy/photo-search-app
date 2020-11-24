import Image from "../types/image";

export const getPhotos = async (query: string): Promise<any> => {
    const ret = await fetch(`https://api.unsplash.com/search/photos?query=${query}&client_id=${process.env.REACT_APP_CLIENT_ID}`)
        .then(res => res.json())
        .then(data => {
            console.log('get photos!!');
            return data;
        });

    return ret;
}
