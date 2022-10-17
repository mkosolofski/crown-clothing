import { Outlet, Link } from 'react-router-dom';
import { Fragment } from 'react';
import { ReactComponent as CrownLogo } from './../../assets/crown.svg';
import { signOutUser } from './../../utils/firebase.utils';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropDown from '../../components/cart-dropdown/cart-dropdown.component';

import { NavigationContainer, NavLink, NavLinks, LogoContainer } from './navigation.styles';

import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../store/user/user.selector';
import { selectIsCartOpen } from '../../store/cart/cart.selector';

const Navigation = () => {
    const currentUser =  useSelector(selectCurrentUser);

    const isCartOpen = useSelector(selectIsCartOpen);

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
