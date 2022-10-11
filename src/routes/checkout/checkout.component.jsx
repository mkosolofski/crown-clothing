import CheckoutList from '../../components/checkout-list/checkout-list.component';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

const Checkout = () => {
    return (
        <div>
            <CheckoutList />
        </div>
    )
}

export default Checkout;
