import { useSelector, useDispatch } from 'react-redux';
import { selectTotalCartItems, selectIsCartOpen } from '../../store/cart/cart.selector';
import { setIsCartOpen } from '../../store/cart/cart.action';

import {
    CartIconContainer,
    ShoppingIcon,
    ItemCount
} from './cart-icon.styles';

const CartIcon = () => {

    const dispatch = useDispatch();

    const isCartOpen = useSelector(selectIsCartOpen);

    const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

    const totalCartItems = useSelector(selectTotalCartItems);

    return (
        <CartIconContainer onClick={toggleIsCartOpen}>
            <ShoppingIcon className='shopping-icon' />
            <ItemCount className='item-count'>{totalCartItems}</ItemCount>
        </CartIconContainer>
    );
}

export default CartIcon;
