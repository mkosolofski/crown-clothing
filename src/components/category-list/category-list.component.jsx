import CategoryListItem from './../category-list-item/category-list-item.component';
import { CategoryListContainer } from './category-list.styles';

const CategoryList = ({categories}) => (
    <CategoryListContainer>
        {
            Object.keys(categories).map(
                (title) => {
                    const category = {...categories[title], title};

                    return <CategoryListItem key={title} category={category} />;
                }
            )
        }
    </CategoryListContainer>
);

export default CategoryList;
