import { useSelector, useDispatch } from 'react-redux';
import { decreaseCartItemQuantity, addCartItem, removeCartItem } from '../../store/cart/cart.action';
import { selectCartItems } from '../../store/cart/cart.selector';

import {
    CheckoutItemContainer,
    Image,
    Name,
    Price,
    Quantity,
    QuantityArrow,
    QuantityValue,
    RemoveItem
} from './checkout-item.styles';

const CheckoutItem = ({item}) => {
    const { imageUrl, name, quantity, price } = item;

    const cartItems = useSelector(selectCartItems);

    const dispatch = useDispatch();

    const decreaseItemQuantity = () => dispatch(decreaseCartItemQuantity(cartItems, item));
    
    const addItem = () => dispatch(addCartItem(cartItems, item));

    const removeItem = () => dispatch(removeCartItem(cartItems, item));

    return (
        <CheckoutItemContainer>
            <Image src={imageUrl} alt={name} />
            <Name>{name}</Name>
            <Quantity>
                <QuantityArrow onClick={decreaseItemQuantity}>&#10094;</QuantityArrow>
                <QuantityValue>{quantity}</QuantityValue>
                <QuantityArrow onClick={addItem}>&#10095;</QuantityArrow>
            </Quantity>
            <Price>{price}</Price>
            <RemoveItem onClick={removeItem}>&#x2718;</RemoveItem>
        </CheckoutItemContainer>
    );
}

export default CheckoutItem
