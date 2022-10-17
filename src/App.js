import CategoryList from './components/category-list/category-list.component';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication.component';
import Shop from './routes/shop/shop.component';
import Checkout from './routes/checkout/checkout.component';
import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { onAuthStateChangedListener, createUserDocumentFromAuth } from './utils/firebase.utils'; 
import { setCurrentUser } from './store/user/user.action';
import { setCategories } from './store/categories/categories.action';
import { getCategoriesAndDocuments } from './utils/firebase.utils';

const App = () => {

    const dispatch = useDispatch();

    useEffect(()=>
        {
            const getCategoriesMap = async () => {
                dispatch(setCategories(await getCategoriesAndDocuments()));
            }

            getCategoriesMap();
        },
        []
    );

    useEffect(
        () => {
            const unsubscribe = onAuthStateChangedListener(
                (user) => {
                    if (user) {
                        createUserDocumentFromAuth(user);
                    }

                    dispatch(setCurrentUser(user));
                }
            );

            return unsubscribe;
        },
        []
    );

    return (
        <Routes>
            <Route path='' element={<Navigation />}>
                <Route index element={<Home />}/>
                <Route path='auth' element={<Authentication />}/>
                <Route path='shop/*' element={<Shop />}/>
                <Route path='checkout' element={<Checkout />}/>
            </Route>
        </Routes>
    );
}

export default App;
