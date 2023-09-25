import { DetailContador } from '../../components'
import './itemDetail.css'

const ItemDetail = ({nombre , img , alt , precio , categoria , empresa, stock}) => {

    return (
        <div className='detailContenedor'>
            <img src={`../../src/assets/img/productos/${img}`} alt={alt} className='detailImg'/>
            <DetailContador stock={stock}/>
            <div className='detailInfo'>
                <h1 className='detailTitulo'>{nombre}</h1>
                <hr />
                <h2 className='detailPrecio'>Precio: $ {precio.toLocaleString()}</h2>
                <p className='detailDescripcion'>Aca iria una descripcion de cada producto que todavia no puse. Y ahora solo estoy completando el espacio con texto extra. ¿Sabias que el primer «bug de la computadora» fue llamado así a causa de un insecto real? Este bicho fue encontrado por Grace Hopper. El ordenador que ella estaba construyendo comenzó a fallar y fue entonces cuando descubrió una polilla de verdad en el sistema. Desde entonces, cuando algo falla en el software o en el hardware, lo llamamos «bug». </p>
                <hr />
                <div className='detailEtiquetas'>
                    <p className='detailCategoria'><strong>Categoria: </strong><span>{categoria}</span></p>
                    <p className='detailEmpresa'><strong>Empresa: </strong><span>{empresa}</span></p>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail