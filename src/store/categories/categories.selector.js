import { createSelector } from 'reselect';

const selectCategoryReducer = (state) => state.categories;

export const selectCategories = createSelector(
    [selectCategoryReducer],
    (categoriesSlice) => categoriesSlice.categories
);

export const selectCategoriesMap = createSelector(
    [selectCategories],
    (categories) =>
        categories.reduce(
            (accumulator, category) => {
                const {title, items, imageUrl} = category
                accumulator[title.toLowerCase()] = {items, imageUrl};
                return accumulator;
            },
            []
        )
);

export const selectCategoriesIsLoading = createSelector(
    [selectCategoryReducer],
    categoriesSlice => categoriesSlice.isLoading
);
