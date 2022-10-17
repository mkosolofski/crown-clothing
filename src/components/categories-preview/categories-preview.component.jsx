import { Fragment } from 'react';
import CategoryPreview from '../../components/category-preview/category-preview.component';

import { useSelector } from 'react-redux';
import { selectCategoriesMap } from '../../store/categories/categories.selector';

const CategoriesPreview = () => {
    const categoriesMap = useSelector(selectCategoriesMap);

    return (
        <Fragment>
        {
            Object.keys(categoriesMap).map(title => {
                const {items} = categoriesMap[title];

                return <CategoryPreview key={title} title={title} products={items} />;
            })
        }
        </Fragment>
    );
}

export default CategoriesPreview;
