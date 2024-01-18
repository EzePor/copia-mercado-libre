"use client";
import React, { useState } from 'react';

const CarouselComponent = ({ bannerPrincipal, Id }) => {
  const [indice, setIndice] = useState(0);

  const siguienteImagen = () => {
    setIndice((prevIndex) =>
      prevIndex === bannerPrincipal.length - 1 ? 0 : prevIndex + 1
    );
  };

  const AnteriorImagen = () => {
    setIndice((prevIndex) =>
      prevIndex === 0 ? bannerPrincipal.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative h-[340px] overflow-hidden">
      {bannerPrincipal.map((item, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-[340px] ${
            index === indice ? 'block' : 'hidden'
          }`}
        >
          <a href={item.linkImagen}>
            <img
              src={item.imagen}
              alt={`imagen banner principal ${index + 1}`}
              className="w-full h-[340px]"
            />
          </a>
        </div>
      ))}
      <button
        onClick={AnteriorImagen}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 px-2 py-4 rounded-full bg-white"
      >
         <img className='h-[15px] w-5 ' src='/imagenes/left.png' alt='Posterior'/>
      </button>
      <button
        onClick={siguienteImagen}
        className="absolute top-1/2 right-0  transform -translate-y-1/2 px-2 py-4 rounded-full bg-white"
      >
        <img className='h-[15px] w-5 ' src='/imagenes/right.png' alt='Anterior'/>
      </button>
    </div>
  );
};

export default CarouselComponent;
