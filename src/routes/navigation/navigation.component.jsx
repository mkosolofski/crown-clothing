import { Outlet, Link } from 'react-router-dom';
import { Fragment, useContext } from 'react';
import { ReactComponent as CrownLogo } from './../../assets/crown.svg';
import { UserContext } from './../../contexts/user.context';
import { signOutUser } from './../../utils/firebase.utils';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropDown from '../../components/cart-dropdown/cart-dropdown.component';
import { CartContext } from '../../contexts/cart.context';

import { NavigationContainer, NavLink, NavLinks, LogoContainer } from './navigation.styles';

const Navigation = () => {
    const {currentUser} = useContext(UserContext);
    const {isCartOpen} = useContext(CartContext);

    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to=''>
                    <CrownLogo className='logo'>Logo</CrownLogo>
                </LogoContainer>
                <NavLinks>
                    <NavLink to='/shop'>SHOP</NavLink>
                    { currentUser ? 
                      <NavLink as='span' onClick={signOutUser}>SIGN OUT</NavLink> :
                      <NavLink to='/auth'>SIGN IN</NavLink>
                    }
                    <CartIcon />
                </NavLinks>
                { isCartOpen && <CartDropDown /> }
            </NavigationContainer>
            <Outlet />
        </Fragment>
    );
}

export default Navigation;