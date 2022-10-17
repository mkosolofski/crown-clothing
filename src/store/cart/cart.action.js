import { createAction } from '../../utils/reducer.utils';
import { CART_ACTION_TYPES } from './cart.types';

export const setIsCartOpen = (isCartOpen) => createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, isCartOpen);

export const setCartItems = (cartItems) => createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartItems);

export const addCartItem = (cartItems, product) => {
    const updatedCartItems = cartItems.map(item => item);
    const existingCartItemIndex = updatedCartItems.findIndex(cartItem => cartItem.id === product.id);

    existingCartItemIndex > -1 ?
        updatedCartItems[existingCartItemIndex].quantity ++ :
        updatedCartItems.push({...product, quantity: 1});

    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, updatedCartItems);
};

export const removeCartItem = (cartItems, product) =>
    createAction(
        CART_ACTION_TYPES.SET_CART_ITEMS,
        cartItems.filter((item) => item.id !== product.id)
    );

export const decreaseCartItemQuantity = (cartItems, product) => {
    const updatedCartItems = cartItems.map(
        (item) => {
            if (item.quantity > 0 && item.id === product.id) {
                item.quantity = item.quantity - 1;
            }

            return item;
        }
    );

    return createAction(
        CART_ACTION_TYPES.SET_CART_ITEMS,
        updatedCartItems.filter((item) => item.quantity > 0)
    );
};
