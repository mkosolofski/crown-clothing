import { useParams } from 'react-router-dom';
import { useState, useEffect, Fragment } from 'react';
import ProductCard from '../../components/product-card/product-card.component';
import { useSelector } from 'react-redux';
import { selectCategoriesMap, selectCategoriesIsLoading } from '../../store/categories/categories.selector';
import Spinner from '../../components/spinner/spinner.component';

import { CategoryTitleContainer, CategoriesContainer } from './category.styles';

const Category = () => {
    const {category} = useParams();
    const [products, setProducts] = useState([]);
    
    const categoriesMap = useSelector(selectCategoriesMap);

    const isCategoriesLoading = useSelector(selectCategoriesIsLoading);

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
            { isCategoriesLoading ?
                <Spinner /> :
                <CategoriesContainer>
                    {   products &&
                            products
                            .map((product) => <ProductCard key={product.id} product={product} />)
                    }
                </CategoriesContainer>
            }
        </Fragment>
    )
}

export default Category;
