export default function TituloRelacionadosVisitas ({tituloRelacionadosVisita}){
    return(
    <div className="ml-16">
        
        <span className="text-xl font-melifuente">{tituloRelacionadosVisita.titulo}</span>
        <a className="text-sm text-meli-azul p-4" href={tituloRelacionadosVisita.link_historial}>{tituloRelacionadosVisita.titulo_historial}</a>
    </div>)}
    