export default function BannerDescuentos ({bannerDescuento}){
    return(
        <div className="grid grid-cols-4 gap-2">
            {
                bannerDescuento.map(item => {
                    return(
                        <div className=" ">{
                            <a href={item.link_imagen} >
                            <img src={item.imagen} alt="imagen producto"
                            className="h-[240px] w-[248px] mx-2"
                             />
                            </a>
                            }</div>
                    )
                })
            }
        </div>
    )
}