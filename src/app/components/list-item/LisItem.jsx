

const LisItem = ({title,thumbnail,price,currency_id, shipping }) =>{
  return (
    
    <li>
        <div className="flex p-4 border-b border-b-gray-200">
        <div className="">
            <img className="w-52 h-52 object-contain"
            src={thumbnail} 
            alt={title}
            
            />
        </div>
        <div className="flex-1"  >
         
          <h1 className="mb-6">{title}</h1>
    
          <span className="m-2 ">{currency_id}  </span>
          <span>{price}</span>
          <p className="text-green-500 mt-6 ">Llega gratis mañana</p>         
          <p>{shipping[2]}</p>

        </div>
        <div className="w-52 h-52">
         <div className="flex justify-center  ">
          <span>4.9</span>

          <span ><img className="bg-blue-800 w-6" src="/imagenes/estrella1.png"></img></span> 
          <span ><img className="bg-blue-800 w-6" src="/imagenes/estrella1.png"></img></span>
          <span ><img className="bg-blue-800 w-6" src="/imagenes/estrella1.png"></img></span>
          <span ><img className="bg-blue-800 w-6" src="/imagenes/estrella1.png"></img></span>
          <span ><img className="bg-blue-800 w-6" src="/imagenes/estrella1.png"></img></span>
         
          <span >5.7</span> 

          
          
         </div>
         <div className="mt-4"><h3>Desponible en 5 colores</h3></div>
        </div>
        </div>
        

    </li>
  )
}

export default LisItem
