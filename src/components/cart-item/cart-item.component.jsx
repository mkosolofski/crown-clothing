import {
    CartItemContainer,
    Image,
    Body,
    Name,
    Price
} from './cart-item.styles';

const CartItem = ({item}) => {
    const { name, quantity, imageUrl, price } = item;

    return (
        <CartItemContainer>
            <Image src={imageUrl} alt={name} />
            <Body>
                <Name>{name}</Name>
                <Price>{`${quantity} x $${price}`}</Price>
            </Body>
        </CartItemContainer>
    );
}

export default CartItem;
