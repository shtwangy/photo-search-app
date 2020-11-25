import Image from "../types/image";

export const getPhotos = async (query: string): Promise<Image[]> => {
    const ret = await fetch(`https://api.unsplash.com/search/photos?query=${query}&client_id=${process.env.REACT_APP_CLIENT_ID}`)
        .then(res => res.json())
        .then(data => {
            let images: Image[] = [];
            data.results.forEach((res: any) => {
                const image: Image = {
                    description: res.description,
                    id: res.id,
                    url: res.urls.raw
                }
                images.push(image);
            });
            return images;
        });

    return ret;
}
