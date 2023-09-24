import './cartWidget.css';
import { Basket3Fill } from 'react-bootstrap-icons';

const cartWidget = () => {
    return (
        <div className='carrito'>
            <a className='divCart'>
                <Basket3Fill className='cartIcon' color='white' size={30}/>
                <span className='contador' id='cart-count'>3</span>
            </a>
        </div>
    )
}

export default cartWidget;