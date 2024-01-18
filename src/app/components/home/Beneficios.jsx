export default function Beneficios({beneficios}){
    return(
        <div className="flex m-10 w-[1200px] justify-center  ">
             {
                beneficios.map(item => {
                    return(
                        <div className=" relative flex m-2 ">{
                            <a href={item.linkBeneficio} >
                            <img src={item.imagenPrincipal} alt="imagen producto"
                            className="h-[250px] w-[379px] smoothing-antialiased  rounded-t-md rounded-b-md shadow-md "
                             />
                             <div className="flex absolute bottom-2 m-4 ">
                             <div className="" >
                                  <img className="h-[80px] mr-2 rounded-t-lg rounded-b-lg " src ={item.imagenBeneficio} alt="imagen beneficio" />
                             </div>
                             <div className=" flex flex-col   ">
                                 <span className="text-white font-melifuente text-xs ">{item.diasBeneficio}</span>
                                  <span className="text-white font-melifuente font-semibold text-xl  " >{item.tituloBeneficio}</span>
                                  <span className="text-white font-melifuente" >{item.nombreBeneficio}</span>
                             </div>
                             </div>
                            </a>
                            }</div>
                    )
                })
            }
            
        </div>
        
    )
}