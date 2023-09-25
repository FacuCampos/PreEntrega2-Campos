import './itemList.css';
import Item from '../Item';

const ItemList = ({catalogo}) => {

    return(
        <div className='itemContenedor'>
            {
                catalogo ?

                <div className='productosGrid'>
                    {
                        catalogo.map((producto) => <Item key={'prod'+producto.id} producto={producto}/>)
                    }
                </div>:
                <div className='divListaVacia'>
                    <h2>Cargando catálogo...</h2>
                </div>
            }
        </div>
    )
}

export default ItemList