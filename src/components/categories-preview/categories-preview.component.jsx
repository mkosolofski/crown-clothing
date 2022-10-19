import { Fragment } from 'react';
import CategoryPreview from '../../components/category-preview/category-preview.component';
import Spinner from '../../components/spinner/spinner.component';

import { useSelector } from 'react-redux';
import { selectCategoriesMap, selectCategoriesIsLoading } from '../../store/categories/categories.selector';

const CategoriesPreview = () => {
    const categoriesMap = useSelector(selectCategoriesMap);

    const isCategoriesLoading = useSelector(selectCategoriesIsLoading);

    return (
        <Fragment>
        {   isCategoriesLoading ?
            <Spinner /> :
            Object.keys(categoriesMap).map(title => {
                const {items} = categoriesMap[title];

                return <CategoryPreview key={title} title={title} products={items} />;
            })
        }
        </Fragment>
    );
}

export default CategoriesPreview;
