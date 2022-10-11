import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
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
    const {imageUrl, name, quantity, price} = item;

    const {decreaseItemQuantityFromCart, addItemToCart, removeItemFromCart} = useContext(CartContext);

    const decreaseItemQuantity = () => decreaseItemQuantityFromCart(item);
    
    const addItem = () => addItemToCart(item);

    const removeItem = () => removeItemFromCart(item);

    return (
        <CheckoutItemContainer>
            <Image src={imageUrl} alt={name} />
            <Name>{name}</Name>
            <Quantity>
                <QuantityArrow onClick={decreaseItemQuantity}>&#10094;</QuantityArrow>
                <QuantityValue>{quantity}</QuantityValue>
                <QuantityArrow onClick={addItem}>&#10095;</QuantityArrow>
            </Quantity>
            <div className='price'>{price}</div>
            <div className='remove-button' onClick={removeItem}>&#x2718;</div>
        </CheckoutItemContainer>
    );
}

export default CheckoutItem
