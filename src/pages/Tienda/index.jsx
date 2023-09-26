import { useEffect , useState } from "react";
import { Link , NavLink, useParams } from "react-router-dom";
import { Layout , ItemList} from "../../components";
import { productos } from "../../productos";
import './tienda.css'

const Tienda = () => {

    const [catalogo, setCatalogo] = useState();
    const [titulo, setTitulo] = useState("Todos los productos");

    const categoria = useParams().categoria;


    useEffect(() => {
        setTimeout(() => {
            if (categoria){
                setCatalogo(productos.filter((prod) => prod.categoria === categoria));
                setTitulo(categoria)
            }else{
                setCatalogo(productos)
                setTitulo("Todos los productos")
            }
        }, 500)
    }, [categoria]);

    return(
        <Layout>
            <div className="tienda">
                <div className="filtroContenedor">
                    <div className="filtroFixed">
                        <h2>Filtro</h2>
                        <ul className="filtro">
                            <li className="categoria">
                                <h3>Categorias</h3>
                                <ul>
                                    <hr />
                                    <li><NavLink to={'/tienda/categoria/Juego de mesa'} className={'filtroLink'}><p>Juegos de mesa</p></NavLink></li>
                                    <hr />
                                    <li><NavLink to={'/tienda/categoria/Juego de rol'} className={'filtroLink'}><p>Juegos de rol</p></NavLink></li>
                                    <hr />
                                    <li><NavLink to={'/tienda/categoria/Cubo rubik'} className={'filtroLink'}><p>Cubos rubik</p></NavLink></li>
                                    <hr />
                                    <li><NavLink to={'/tienda/categoria/Dados'} className={'filtroLink'}><p>Dados</p></NavLink></li>
                                    <hr />
                                    <li><Link to={'/tienda/'} className={'filtroLink'}><p>Borrar categoria</p></Link></li>
                                    <hr />
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="productosContenedor">
                    <h1 className="titulo">{titulo}</h1>
                    <hr />
                    <div className="productListContenedor">
                        <ItemList catalogo={catalogo} />
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Tienda;