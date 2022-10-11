import CartItem from '../cart-item/cart-item.component';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../contexts/cart.context';
import Button from '../button/button.component';

import {
    CartDropDownContainer,
    CartItems,
    EmptyMessage
} from './cart-dropdown.styles';


const CartDropDown = () => {

    const {cartItems} = useContext(CartContext);

    const navigate = useNavigate();

    const onClickCheckout = () => navigate('/checkout');

    return (
        <CartDropDownContainer>
            <CartItems>
                {
                    cartItems.length ?
                        cartItems.map(cartItem => (<CartItem key={cartItem.id} item={cartItem} />)) :
                        <EmptyMessage>You're Cart Is Empty</EmptyMessage>
                }
            </CartItems>
            { cartItems.length && <Button onClick={onClickCheckout}>Checkout</Button> }
        </CartDropDownContainer>
    );
}

export default CartDropDown;
