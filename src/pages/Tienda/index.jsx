import Layout from "../../components/Layout";



const Tienda = () => {
    return(
        <Layout>
            <h1>Tienda</h1>
            <div className="filtroContenedor">
                <h2>Filtro</h2>
                <ul className="filtro">
                    <li className="categoria">
                        <h3>Categoria</h3>
                        <ul>
                            <li>Juegos de mesa</li>
                            <li>Juegos de rol</li>
                            <li>Cubos rubik</li>
                            <li>Dados</li>
                        </ul>
                    </li>
                    <li className="empresa">
                        <h3>Empresa</h3>
                        <ul>
                            <li>Devir</li>
                            <li>Da Vinci Games</li>
                            <li>Rubiks</li>
                            <li>Wizards of the Coast</li>
                            <li>T&G</li>
                            <li>Edge Entertainment</li>
                            <li>Arrakis Games</li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div className="productosContenedor">
                
            </div>
        </Layout>
    )
    
}

export default Tienda;