import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import CheckoutItem from '../checkout-item/checkout-item.component';
import { CheckoutContainer, HeaderContainer, Header, TotalContainer } from './checkout-list.styles';

const CheckoutList = () => {
    const {cartItems, totalCartCost} = useContext(CartContext);

    return (
        <CheckoutContainer>
            <HeaderContainer>
                <Header>Product</Header>
                <Header>Description</Header>
                <Header>Quantity</Header>
                <Header>Price</Header>
                <Header>Remove</Header>
            </HeaderContainer>
            {cartItems.map((item) => (
                <CheckoutItem key={item.id} item={item} />
            ))}
            <TotalContainer>TOTAL: ${totalCartCost}</TotalContainer>
        </CheckoutContainer>
    );
}

export default CheckoutList
