import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( category ) => {

 const [images, setImages] = useState([]);
 const [isLoading, setIsLoading] = useState(true);

  const getImages = async() => {
    const newImages = await getGifs(category);
    setImages(newImages);
    setIsLoading(false);
  }

  // El segundo parametro se deja como un array vacio que representa las dependencias,
  // esto hace que se ejecute solo una vez, cuando se crea el componente.
  useEffect( () => {
    getImages();    
  },[])
  
    return{
        images: images,
        isLoading
    }
}