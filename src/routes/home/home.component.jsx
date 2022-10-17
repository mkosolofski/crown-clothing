import CategoryList from './../../components/category-list/category-list.component';
import { useSelector } from 'react-redux';
import { selectCategoriesMap } from '../../store/categories/categories.selector';

const Home = () => {
    const categoriesMap = useSelector(selectCategoriesMap);

    return (
        <CategoryList categories={categoriesMap} />
    );
}

export default Home;
