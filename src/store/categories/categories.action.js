import { createAction } from '../../utils/reducer.utils';
import { CATEGORIES_ACTION_TYPES } from './categories.types';

export const setCategories = (categoriesMap) => createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categoriesMap);
