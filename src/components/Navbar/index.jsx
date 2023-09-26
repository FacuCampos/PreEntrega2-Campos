import './navbar.css';
import { Link } from 'react-router-dom';
import { House, Shop, CupHot, Bag} from 'react-bootstrap-icons';
import CartWidget from '../CartWidget';


const Navbar = () => {
    return (
        <nav className='navegador'>
            <Link to={'/'} className='logoLink'><img className='logoNav' src='../../../src/assets/img/marca/logo-expandido.svg' alt="logo de la marca"/></Link>
            <div className='navList'>
                <Link to={'/'} className='navLink'>
                    <div className='navLinkDiv'>
                        <House className='navLinkIcon'/>
                        <p className='navLinkP'>
                            Inicio
                        </p>
                    </div>
                </Link>
                <Link to={'/tienda'} className='navLink'>
                    <div className='navLinkDiv'>
                        <Bag className='navLinkIcon'/>
                        <p className='navLinkP'>
                            Tienda
                        </p>
                    </div>
                </Link>
                <Link to={'/contacto'} className='navLink'>
                    <div className='navLinkDiv'>
                        <CupHot className='navLinkIcon'/>
                        <p className='navLinkP'>
                            Contacto
                        </p>
                    </div>
                </Link>
                <Link to={'/nosotros'} className='navLink'>
                    <div className='navLinkDiv'>
                        <Shop className='navLinkIcon'/>
                        <p className='navLinkP'>
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