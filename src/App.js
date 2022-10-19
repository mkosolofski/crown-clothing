import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication.component';
import Shop from './routes/shop/shop.component';
import Checkout from './routes/checkout/checkout.component';
import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onAuthStateChangedListener, createUserDocumentFromAuth } from './utils/firebase.utils'; 
import { setCurrentUser } from './store/user/user.action';
import { fetchCategoriesAsync } from './store/categories/categories.action';

const App = () => {
    const dispatch = useDispatch();

    useEffect(
        () => {
            dispatch(fetchCategoriesAsync);
        },
        [dispatch]
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
        [dispatch]
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
