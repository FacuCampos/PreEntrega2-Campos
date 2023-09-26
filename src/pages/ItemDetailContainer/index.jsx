import { useEffect , useState } from "react";
import { useParams } from "react-router-dom";
import { SyncLoader } from "react-spinners";
import { productos } from "../../productos";
import {Layout , ItemDetail} from "../../components";
import './itemDetailContainer.css';


const ItemDetailContainer = () => {

    const id = useParams().idProducto;

    const [producto, setProducto] = useState({});
    const [cargando, setCargando] = useState(true);



    useEffect(() => {
        setTimeout(() => {
            setProducto(productos.find((prod) => prod.id === id));
            setCargando(false);
        }, 1000)
    }, [])

    return(
        <Layout>
            <div className="itemDetailContainer">
                {
                    cargando ? 
                    <div className="cargando">
                        <h2>Cargando...</h2>
                        <SyncLoader color={'#000'} size={10}/>
                    </div> :
                        
                    <ItemDetail {...producto}/>
                }
            </div>
        </Layout>
    )

}

export default ItemDetailContainer