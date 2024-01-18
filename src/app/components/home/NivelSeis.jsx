export default function NivelSeis(){
    return(
        <div className="w-[1180px] h-[350px] shadow-md m-auto ">
            <div className="w-[1180px] h-[87px] flex items-center justify-between bg-gradient-to-r from-pink-700 via-pink-600 to-violet-900  w-ful rounded-t-lg shadow-md  ">
                <span className="items-center  pl-4 text-2xl text-white font-semibold ">Suscribite al nivel 6</span>
                <div className="flex flex-col  px-4 text-white font-melifuente-bol border-l-4 border-white-500  ">
                <span className="line-through text-sm" >$2.500</span>
                <span className="text-2xl font-bold  ">$999/mes</span>
                </div>
            </div>
            <div className="bg-white flex aling-center justify-center ">
                <div className="h-[182px] w-[1180px] p-5 ">
                      <span className="font-melifuente font-semibold  pl-5  ">Conseguí los mejores beneficios en Mercado Libre</span> 
                        <div className="flex  justify-around   ">
                    <div className="flex items-center m-5">
                    <img className="h-[72px] rounded-full border-black- border-2 m-1  " src="/imagenes/disney.svg" /> 
                    <span>Disney+ sin cargo</span>
                     </div>

                    <div className="flex items-center " >
                    <img className="h-[72px] rounded-full border-black- border-2 m-1  " src="/imagenes/star.svg" />
                    <span>Star+ sin cargo</span>
                    </div>

                    <div className="flex items-center " >
                    <img className="h-[72px] rounded-full border-black- border-2 m-1  " src="/imagenes/transporte.png" />
                    <span className="w-[194px] h-[80px]" >Envíos gratis y rápidos desde $ 16.000 y 45% OFF en envíos de menos de $ 16.000</span>
                    </div>
                    </div>
                </div>   
            </div >  
                 <div className="w-[1180px] h-[81px] flex  justify-end px-7 p-4 bg-white rounded-b-lg shadow-md mt-0.5 ">
                        <button className="h-[48px] w-[119px]  bg-meli-azul duration-300 hover:bg-blue-700  text-white text-sm font-melifuente py-24px rounded-lg " ><a href="https://www.mercadolibre.com.ar/suscripciones/nivel-6#origin=widget_l6#c_id=/home/user-loyalty-benefits&c_uid=e44f7069-e9de-46ac-9a70-bd8a4bbdda8e"  >Suscribite</a></button>
                </div>     
        </div>
    )
}