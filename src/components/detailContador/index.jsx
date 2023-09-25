import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useCount } from "../../hooks"
import './detailContador.css'

const DetailContador = (stock) => {

    const {count, agregar, decrementar} = useCount();

    const toastAgregado = () => {
        toast.success(`"Agregado al carrito"`,{
            position: toast.POSITION.BOTTOM_RIGHT
        })
    }

    return(
        <div className="detailContador">
            <div className="detailContadorDiv">
                {
                    count > 1 ?
                    <button onClick={() => decrementar()}><p><strong>-</strong></p></button>:
                    <button disabled><p><strong>-</strong></p></button>
                }
                <p className="numeroContador">{count}</p>
                {
                    stock.stock == count ?
                    <button disabled><p><strong>+</strong></p></button>:
                    <button onClick={() => agregar()}><p><strong>+</strong></p></button>
                }
                {
                    (count !== 0) ?
                    <button className="agregarAlCart" onClick={toastAgregado}><p><strong>Agregar al carrito</strong></p></button>:
                    <button disabled className="agregarAlCart"><p><strong>Agregar al carrito</strong></p></button>
                }
            </div>
            {
                (stock.stock == count || stock.stock == 0) && 
                <p className="detailPAgotado">No puedes pedir mas de este articulo</p>
            }
            <ToastContainer />
        </div>
    )
}

export default DetailContador