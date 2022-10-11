import { useParams } from 'react-router-dom';
import { useContext, useState, useEffect, Fragment } from 'react';
import { CategoriesContext } from '../../contexts/categories.context';
import ProductCard from '../../components/product-card/product-card.component';

import { CategoryTitleContainer, CategoriesContainer } from './category.styles';

const Category = () => {
    const {category} = useParams();
    const {categoriesMap} = useContext(CategoriesContext);
    const [products, setProducts] = useState([]);

    useEffect(
        () => {
            setProducts(
                Object.keys(categoriesMap).length > 0 ?
                categoriesMap[category].items :
                []
            );
        },
        [category, categoriesMap]
    );

    return (
        <Fragment>
            <CategoryTitleContainer>{category.toUpperCase()}</CategoryTitleContainer>
            <CategoriesContainer>
                {   products &&
                        products
                        .map((product) => <ProductCard key={product.id} product={product} />)
                }
            </CategoriesContainer>
        </Fragment>
    )
}

export default Category;
