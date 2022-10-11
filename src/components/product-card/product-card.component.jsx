import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import {
    ProductCardContainer,
    Image,
    FooterContainer,
    FooterName,
    FooterPrice
} from './product-card.styles';


const ProductCard = ({product}) => {
    const {name,price,imageUrl} = product;
    const {addItemToCart} = useContext(CartContext);

    const addProductToCart = () => addItemToCart(product);

    return (
        <ProductCardContainer>
            <Image src={imageUrl} alt={name} />
            <FooterContainer>
                <FooterName>{name}</FooterName>
                <FooterPrice>{price}</FooterPrice>
            </FooterContainer>
            <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart}>Add to card</Button>
        </ProductCardContainer>
    );
}

export default ProductCard;
