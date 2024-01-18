"use client";
import React, { useState } from 'react';

const CategoriaPopular = ({ populares }) => {
  const itemsPerPage = 14; // 2 filas * 7 columnas
  const [currentPage, setCurrentPage] = useState(1);

  const totalItems = populares.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);// redondeo paginas

  const siguientePagina = () => {
    setCurrentPage((prevPage) => (prevPage < totalPages ? prevPage + 1 : 1));
  };

  const anteriorPagina = () => {
    setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : totalPages));
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  return (
    <div className="w-[1194px] h-[340px] m-auto shadow-md relative overflow-hidden">
      <div className="grid grid-cols-7 grid-rows-2 gap-0.5 shadow-md transform  translate-x-[calc(-100%*{currentPage-1})]-full transition-transform duration-500 ease-in-out">
        {populares.slice(startIndex, endIndex).map((item, index) => (
          <div key={index} className="bg-white h-[169px] w-[169px]">
            <a href={item.enlace} className="">
              <div className=" group flex flex-col content-center justify-center items-center w-full h-full transition duration-300 ease-in-out hover:bg-meli-azul hover:text-white">
                <img
                  src={item.icono}
                  alt={item.descripcion}
                  className="h-[48px] w-[48px] group-hover:invert"
                />
                <p className="w-[145px] font-melifuente text-sm text-center p-2">
                  {item.descripcion}
                </p>
              </div>
            </a>
          </div>
        ))}
      </div>
      <button onClick={siguientePagina} className="absolute top-1/2  left-0 transform -translate-y-1/2 px-2 py-4 bg-white rounded-full">
      <img className='h-5 w-5 ' src='/imagenes/left.png' alt='Imagen Siguiente'/>
      </button>
      <button onClick={anteriorPagina} className="absolute top-1/2  right-0 transform -translate-y-1/2 px-2 py-4 bg-white rounded-full">
      <img className='h-5 w-5 ' src='/imagenes/right.png' alt='Imagen Posterior' />
      </button>
    </div>
  );
};

export default CategoriaPopular;
