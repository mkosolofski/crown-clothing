import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

import {
    CartIconContainer,
    ShoppingIcon,
    ItemCount
} from './cart-icon.styles';

const CartIcon = () => {

    const {isCartOpen, setIsCartOpen, cartItems, totalCartItems} = useContext(CartContext);
    
    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

    return (
        <CartIconContainer onClick={toggleIsCartOpen}>
            <ShoppingIcon className='shopping-icon' />
            <ItemCount className='item-count'>{totalCartItems}</ItemCount>
        </CartIconContainer>
    );
}

export default CartIcon;
