"use client";
import React, { useEffect, useState } from "react";
import LisItem from "../components/list-item/LisItem";


export default function PageItems({ searchParams }) {
  console.log(searchParams);
const [resultado, setResultado] = useState([]);
const [isLoading, setIsLoading] = useState(true);

  useEffect(() =>{
    fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${searchParams?.q}&limit=25`)
    .then (res => res.json())
    .then(data => {
      
      setIsLoading(false);
      setResultado(data.results);
      
      //termina el pedido al API
    
     
    })
  },[]);



  console.log('resultado',resultado);
  return(
    <div className="p-8 max-w-screen-xl mx-auto mt-6 ">
      <ul className="bg-write p-2">
      { resultado.map((item) => <LisItem key={item.id} {...item} /> 

      )}


      </ul>

    </div>
  )
  ;
}
