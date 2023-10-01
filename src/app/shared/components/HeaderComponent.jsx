import Image from "next/image";
import Link from "next/link";

const HeaderComponent = () => {
  return (
    <header className="w-full bg-meli ">
      <div className="max-w-screen-xl mx-auto p-8 flex items-center ">
        <Link href="/">
          <img
            className="logoML"
            src= "/imagenes/logoMercadoLibre.png"
            width= {"134"}
            height={ "34"}
            alt="LogoMercaLibre"
          />
        </Link>

        <form action="/items" className="w-full flex">
          <input
            className="flex-1 p-2 shadow-md  outline-none" 
            autoComplete="off" 
            name="q"
            type="text"
            placeholder="Buscar productos, marcas y más..."
          />
          <button className="bg-white px-3 border-l shadow-md border-l-slate-200"  >
            <Image 
            width={"36"} height={"36"}
            src="/imagenes/lupaBuscar.png" 
            alt="Buscar" 
            />
          </button>
        </form>
      </div>
    </header>
  );
};

export default HeaderComponent;
