import './itemList.css';
import Item from '../Item';
import { useEffect, useState } from 'react';
import { SyncLoader } from 'react-spinners';

const ItemList = ({catalogo}) => {

    const [cargando, setCargando] = useState(false);

    useEffect(() => {
        setCargando(true);
        setTimeout(()=> {
            setCargando(false);
            console.log(cargando);
        }, 1000)
    },[catalogo])

    return(
        <div className='itemContenedor'>
            {
                (!cargando && catalogo) ?

                <div className='productosGrid'>
                    {
                        catalogo.map((producto) => <Item key={'prod'+producto.id} producto={producto}/>)
                    }
                </div>:
                <div className='divListaVacia'>
                    <h2>Cargando catálogo...</h2>
                    <SyncLoader color={'#000'} size={10}/>
                </div>
            }
        </div>
    )
}

export default ItemList