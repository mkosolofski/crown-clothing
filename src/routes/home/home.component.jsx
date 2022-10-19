import CategoryList from './../../components/category-list/category-list.component';
import { useSelector } from 'react-redux';
import { selectCategoriesMap, selectCategoriesIsLoading } from '../../store/categories/categories.selector';
import Spinner from '../../components/spinner/spinner.component';
import { Fragment } from 'react';

const Home = () => {
    const isCategoriesLoading = useSelector(selectCategoriesIsLoading);
    const categoriesMap = useSelector(selectCategoriesMap);

    return (
        <Fragment>
            { isCategoriesLoading ?
              <Spinner/> :
                <CategoryList categories={categoriesMap} />
            }
        </Fragment>
    );
}

export default Home;
