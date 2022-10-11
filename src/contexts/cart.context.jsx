import { createContext,  useReducer } from 'react';
import { createAction } from '../utils/reducer.utils';

const addCartItem = (cartItems, product) => {
    const updatedCartItems = cartItems.map(item => item);
    const existingCartItemIndex = updatedCartItems.findIndex(cartItem => cartItem.id === product.id);
   
    existingCartItemIndex > -1 ?
        updatedCartItems[existingCartItemIndex].quantity ++ :
        updatedCartItems.push({...product, quantity: 1});

    return updatedCartItems;
};

const removeCartItem = (cartItems, product) =>
    cartItems.filter((item) => item.id !== product.id);

const decreaseCartItemQuantity = (cartItems, product) => {
    const updatedCartItems = cartItems.map(
        (item) => {
            if (item.quantity > 0 && item.id === product.id) {
                item.quantity = item.quantity - 1;
            }

            return item;
        }
    );

    return updatedCartItems.filter((item) => item.quantity > 0);
};

const INITIAL_STATE = {
    isCartOpen: false,
    cartItems: [],
    totalCartItems: 0,
    totalCartCost: 0
};

export const CartContext = createContext(
    {
        ...INITIAL_STATE,
        setIsCartOpen: () => {},
        addItemToCart: () => {},
        removeItemFromCart: () => {},
        decreaseItemQuantityFromCart: () => {}
    }
);

const CART_ACTION_TYPES = {
    SET_IS_CART_OPEN: 'TOGGLE_CART_OPEN',
    SET_CART_ITEMS: 'SET_CART_ITEMS'
};

const cartReducer = (state, action) => {
    const { type, payload } = action;

    switch(type) {
        case CART_ACTION_TYPES.SET_IS_CART_OPEN:
            return {...state, isCartOpen: payload};

        case CART_ACTION_TYPES.SET_CART_ITEMS:
            return {
                ...state,
                cartItems: payload.cartItems,
                totalCartItems: payload.totalCartItems,
                totalCartCost: payload.totalCartCost
            };

        default:
            throw new Error(`Unhandled type ${type} in cart reducer`);
    }
};

const getTotalCartItems = (cartItems) => (
    cartItems.reduce((accumulator, cartItem) => (cartItem.quantity + accumulator), 0)
);

const getTotalCartCost = (cartItems) => (
    cartItems.reduce(
        (accumulator, cartItem) => ((cartItem.quantity * cartItem.price) + accumulator), 0
    )
);

export const CartProvider = ({children}) => {

    const [{ isCartOpen, cartItems, totalCartItems, totalCartCost }, dispatch] = useReducer(cartReducer, INITIAL_STATE);

    const setIsCartOpen = (isCartOpen) => dispatch(createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, isCartOpen));
    
    const updateCartItemsReducer = (newCartItems) => 
        dispatch(
            createAction(
                CART_ACTION_TYPES.SET_CART_ITEMS,
                {
                    cartItems: newCartItems,
                    totalCartItems: getTotalCartItems(newCartItems),
                    totalCartCost: getTotalCartCost(newCartItems)
                }
            )
        );

    const addItemToCart = (product) =>
        updateCartItemsReducer(addCartItem(cartItems, product));

    const decreaseItemQuantityFromCart = (product) =>
        updateCartItemsReducer(decreaseCartItemQuantity(cartItems, product));
    
    const removeItemFromCart = (product) =>
        updateCartItemsReducer(removeCartItem(cartItems, product));

    return (
        <CartContext.Provider
            value={{
                isCartOpen,
                setIsCartOpen,
                addItemToCart,
                removeItemFromCart,
                decreaseItemQuantityFromCart,
                cartItems,
                totalCartItems,
                totalCartCost
            }}
        >
            {children}
        </CartContext.Provider>
    );
}
