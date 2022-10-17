import CheckoutItem from '../checkout-item/checkout-item.component';
import { CheckoutContainer, HeaderContainer, Header, TotalContainer } from './checkout-list.styles';

import { useSelector } from 'react-redux';
import { selectCartItems, selectTotalCartCost } from '../../store/cart/cart.selector';

const CheckoutList = () => {
    const cartItems = useSelector(selectCartItems);
    const totalCartCost = useSelector(selectTotalCartCost);

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
