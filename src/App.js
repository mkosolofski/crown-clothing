import CategoryList from './components/category-list/category-list.component';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication.component';
import Shop from './routes/shop/shop.component';
import Checkout from './routes/checkout/checkout.component';
import { Routes, Route } from 'react-router-dom';

const App = () => {
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