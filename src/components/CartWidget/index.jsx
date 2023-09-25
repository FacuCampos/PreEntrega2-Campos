import './cartWidget.css';
import { Basket3Fill } from 'react-bootstrap-icons';

const cartWidget = () => {
    return (
        <div className='carrito'>
            <a className='divCart'>
                <Basket3Fill className='cartIcon'/>
                <span className='contador' id='cart-count'><strong>3</strong></span>
            </a>
        </div>
    )
}

export default cartWidget;