import {
    CategoryListItemContainer,
    Image,
    Body,
    Title,
    ShopNowButton
} from './category-list-item.styles';

const CategoryListItem = ({category}) => {
    const { imageUrl, title } = category; 
    return (
        <CategoryListItemContainer to={`shop/${title}`}>
            <Image imageUrl={imageUrl}/>
            <Body to={`shop/${title}`}>
                <Title>{title}</Title>
                <ShopNowButton>Shop Now</ShopNowButton>
            </Body>
        </CategoryListItemContainer>
    );
}

export default CategoryListItem;
