import { useSelector, useDispatch } from 'react-redux';
import { addCartItem } from '../../store/cart/cart.action';
import { selectCartItems } from '../../store/cart/cart.selector';

import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import {
    ProductCardContainer,
    Image,
    FooterContainer,
    FooterName,
    FooterPrice
} from './product-card.styles';

const ProductCard = ({product}) => {
    const { name, price, imageUrl } = product;
    const cartItems = useSelector(selectCartItems);
    const dispatch = useDispatch();

    const addProductToCart = () => dispatch(addCartItem(cartItems, product));

    return (
        <ProductCardContainer>
            <Image src={imageUrl} alt={name} />
            <FooterContainer>
                <FooterName>{name}</FooterName>
                <FooterPrice>{price}</FooterPrice>
            </FooterContainer>
            <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart}>Add To Cart</Button>
        </ProductCardContainer>
    );
}

export default ProductCard;
