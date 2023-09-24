import './navbar.css';
import CartWidget from '../CartWidget';
import { House, Shop, CupHot, Bag, ChevronDown} from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <nav className='navegador'>
            <Link to={'/'} className='logoLink'><img className='logoNav' src="../src/assets/img/marca/logo-expandido.svg" alt="logo de la marca"/></Link>
            <div className='navList'>
                <Link to={'/'} className='navLink'>
                    <div>
                        <House color='white' size={20}/>
                        <p>
                            Inicio
                        </p>
                    </div>
                </Link>
                <Link to={'/tienda'} className='navLink'>
                    <div>
                        <Bag color='white' size={20}/>
                        <p>
                            Tienda
                        </p>
                        <ChevronDown className='chevron' color='white' size={15}/>
                    </div>
                </Link>
                <Link to={'/contacto'} className='navLink'>
                    <div>
                        <CupHot color='white' size={20}/>
                        <p>
                            Contacto
                        </p>
                    </div>
                </Link>
                <Link to={'/nosotros'} className='navLink'>
                    <div>
                        <Shop color='white' size={20}/>
                        <p>
                            Nosotros
                        </p>
                    </div>
                </Link>
            </div>
            <CartWidget />
        </nav>
    )
}

export default Navbar