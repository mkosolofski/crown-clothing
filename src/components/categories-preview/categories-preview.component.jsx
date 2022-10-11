import { useContext, Fragment } from 'react';
import { CategoriesContext } from '../../contexts/categories.context';
import CategoryPreview from '../../components/category-preview/category-preview.component';

const CategoriesPreview = () => {
    const {categoriesMap} = useContext(CategoriesContext);

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
