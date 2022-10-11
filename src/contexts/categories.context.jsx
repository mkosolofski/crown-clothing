import { createContext, useState, useEffect } from 'react';
import {getCategoriesAndDocuments} from '../utils/firebase.utils';

export const CategoriesContext = createContext({
    categoriesMap: {},
    setCategoriesMap: () => {}
})

export const CategoriesProvider = ({children}) => {
    const [categoriesMap, setCategoriesMap] = useState({});

    useEffect(()=>
        {
            const getCategoriesMap = async () => {
                setCategoriesMap(await getCategoriesAndDocuments());
            }

            getCategoriesMap();
        },
        []
    )

    return (
        <CategoriesContext.Provider value={{categoriesMap, setCategoriesMap}}>
            {children}
        </CategoriesContext.Provider>
    );
}
