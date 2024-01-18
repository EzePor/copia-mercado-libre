"use client";
import React, { useState } from 'react';

const CarouselComponent = ({ visitado }) => {
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(0);

  const startIdx = currentPage * itemsPerPage;
  const endIdx = startIdx + itemsPerPage;

  const siguienteImagen = () => {
    setCurrentPage((prevPage) =>
      prevPage === Math.ceil(visitado.length / itemsPerPage) - 1 ? 0 : prevPage + 1
    );
  };

  const anteriorImagen = () => {
    setCurrentPage((prevPage) =>
      prevPage === 0 ? Math.ceil(visitado.length / itemsPerPage) - 1 : prevPage - 1
    );
  };

  return (
    <div className="relative h-[421px] w-[1280px] p-4 flex align-center justify-center overflow-hidden">
      {visitado.slice(startIdx, endIdx).map((item, index) => (
        <div key={index} className="w-[227px] h-[421px] p-2">
          <a href={item.enlaceProducto}>
            <div className="bg-white flex rounded-t-lg shadow-md hover:shadow-2xl">
              <img
                className="h-[227px] justify-items-center smoothing-antialiased m-auto"
                src={item.imagen}
                alt="imagen producto"
              />
            </div>
          </a>
          <a href={item.enlaceProducto}>
            <div className="mt-0.5 bg-white h-[166px] rounded-b-lg shadow-md">
              <h1 className="p-3 font-melifuente text-[12px]">{item.nombreProducto}</h1>
              <p className="text-[10px] px-3 line-through">{item.precioAnterior}</p>
              <span className="px-4 text-2xl">{item.precio}</span>
              <span className="font-melifuente text-meli-verde text-[13px]">{item.descuento}</span>
              <h3 className="text-[10px] p-2 px-2">{item.formaPago}</h3>
              <p className="text-xs font-semibold text-meli-verde px-4">{item.envio}</p>
            </div>
          </a>
        </div>
      ))}
      <button
        onClick={anteriorImagen}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 px-2 py-4 bg-white rounded-full"
      >
        <img className="h-5 w-5" src="/imagenes/left.png" alt="Imagen Siguiente" />
      </button>
      <button
        onClick={siguienteImagen}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 px-2 py-4 bg-white rounded-full"
      >
        <img className="h-5 w-5" src="/imagenes/right.png" alt="Imagen Posterior" />
      </button>
    </div>
  );
};

export default CarouselComponent;
