import CategoryList from './../../components/category-list/category-list.component';
import { CategoriesContext } from '../../contexts/categories.context';
import { useContext } from 'react';

const Home = () => {
    const {categoriesMap} = useContext(CategoriesContext);

    return (
        <CategoryList categories={categoriesMap} />
    );
}

export default Home;
