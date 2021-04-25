import React from 'react';
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';

import { useParams } from "react-router-dom";
import useFetch from '../useFetch'



const CarouselCwk = ({ id }) => {

    const params = useParams()
    const id_coworking = id || params.id_coworking;
    console.log('ID:', id_coworking, id, params)
    const fotos = useFetch(`http://localhost:9999/ver-foto-coworking/${id_coworking}`) || { fotos: [] }

    console.log('Fotos:', fotos)

    const images = fotos.map((id_coworking) => ({

        src: `http://localhost:9999/images/cwk/${id_coworking.foto}.jpg`
    }));

    if (!images.length) return false;

    return (
        <Carousel images={images} />
    );

};




export default CarouselCwk;