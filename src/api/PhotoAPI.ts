import Photo from '../types/Photo';

const getPhotos = async (query: string): Promise<Photo[]> => {
  const ret = await fetch(`https://api.unsplash.com/search/photos?query=${query}&client_id=${process.env.REACT_APP_CLIENT_ID}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      const images: Photo[] = [];
      data.results.forEach((res: any) => {
        const image: Photo = {
          altDescription: res.alt_description,
          description: res.description,
          id: res.id,
          url: res.urls.regular,
        };
        images.push(image);
      });
      return images;
    });

  return ret;
};

export default getPhotos;
