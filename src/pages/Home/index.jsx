import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { productos } from '../../productos'
import { Layout , Slider , ItemList} from "../../components";
import './home.css'


const Home = () => {

    const [destacados, setDestacados] = useState();

    useEffect(() => {
        setTimeout(() => {
            setDestacados(productos.filter((prod) => prod.destacado))
        }, 500)
    }, []);

    return(
        <Layout>
            <Slider />
            <h1 className='titulo'>Productos destacados</h1>
            <div className='destacadosContenedor'>
                <ItemList catalogo={destacados} />
                <hr />
                <Link to={'/tienda'} className="verTodos">Ver todos los productos</Link>
            </div>
        </Layout>
    )
    
}

export default Home;