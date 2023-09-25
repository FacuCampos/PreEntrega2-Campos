import './item.css';
import { Link } from "react-router-dom";

const Item = ({producto}) => {

    const { id , nombre , img , precio , alt } = producto;

    return(
        <div className='itemCard'>
            <img className='cardImg' src={`../src/assets/img/productos/${ img }`} alt={ alt } />
            <div className='cardInfo'>
                <h2 className='cardTitulo'>{ nombre }</h2>
                <p className='cardPrecio'><strong>$ { precio.toLocaleString() }</strong></p>
                <Link to={`/tienda/producto/${id}`} className='cardBoton'>Ver más</Link>
            </div>
        </div>
    )
}

export default Item