import Link from "next/link";
import ImagenProducto from "../Carousel/ImagenProducto/page";
import Clasificacion from "../Clasificacion/page";
import DetalleProducto from "../DetalleProducto/page";


export default function ListItem({ 
	id,
	title, 
	price,
	currency_id,
	shipping,
	installments,
	thumbnail,
	permalink,
	seller,
	ratings,
	total,
	attributes
	 }) {

		const itemUrl = `/items/${id}`;
  return (
    <li>
		<Link href={itemUrl}>

	<div className="flex p-1 border-b border-b-gray-200">
	<ImagenProducto
	permalink={permalink}  
	thumbnail={thumbnail} 
	title={title}
	/>

	<DetalleProducto
		title={title}
		price={price}
		currency_id={currency_id}
		shipping={shipping}
		installments={installments}
		permalink={ permalink }
		attributes={attributes}
	/>

	<div className="w-40 h-40 bg-white">
		<Clasificacion ratings={ratings} total={total} seller={seller} />
	</div>
	</div>
		
		</Link>
    </li>
  );
}
