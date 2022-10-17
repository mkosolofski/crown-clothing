import { createSelector } from 'reselect';

const selectCartReducer = (state) => state.cart;

export const selectIsCartOpen = createSelector(
    [selectCartReducer],
    (cart) => cart.isCartOpen
);

export const selectCartItems = createSelector(
    [selectCartReducer],
    (cart) => cart.cartItems ? cart.cartItems : []
);

export const selectTotalCartItems = createSelector(
    [selectCartItems],
    (cartItems) => 
        cartItems.reduce((accumulator, cartItem) => (cartItem.quantity + accumulator), 0)
);

export const selectTotalCartCost = createSelector(
    [selectCartItems],
    (cartItems) => 
        cartItems.reduce(
            (accumulator, cartItem) => ((cartItem.quantity * cartItem.price) + accumulator), 0
        )
);
