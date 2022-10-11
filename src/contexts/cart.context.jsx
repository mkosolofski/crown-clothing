import { createContext, useState, useEffect } from 'react';

const addCartItem = (cartItems, product) => {
    const updatedCartItems = cartItems.map(item => item);
    const existingCartItemIndex = updatedCartItems.findIndex(cartItem => cartItem.id === product.id);
   
    existingCartItemIndex > -1 ?
        updatedCartItems[existingCartItemIndex].quantity ++ :
        updatedCartItems.push({...product, quantity: 1});

    return updatedCartItems;
}

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
}

export const CartContext = createContext(
    {
        isCartOpen: false,
        setIsCartOpen: () => {},
        cartItems: [],
        addItemToCart: () => {},
        removeItemFromCart: () => {},
        decreaseItemQuantityFromCart: () => {},
        totalCartItems: 0,
        totalCartCost: 0
    }
);

export const CartProvider = ({children}) => {

    const [isCartOpen, setIsCartOpen] = useState(null);
    const [cartItems, setCartItems] = useState([]);
    const [totalCartItems, setTotalCartItems] = useState(0);
    const [totalCartCost, setTotalCartCost] = useState(0);

    const addItemToCart = (product) => setCartItems(addCartItem(cartItems, product));

    const decreaseItemQuantityFromCart = (product) => setCartItems(decreaseCartItemQuantity(cartItems, product));
    
    const removeItemFromCart = (product) => setCartItems(cartItems.filter((item) => item.id !== product.id));

    useEffect(
        () => {
            setTotalCartItems(
                cartItems.reduce((accumulator, cartItem) => (cartItem.quantity + accumulator), 0)
            );
        },
        [cartItems]
    );
    
    useEffect(
        () => {
            setTotalCartCost(
                cartItems.reduce((accumulator, cartItem) => ((cartItem.quantity * cartItem.price) + accumulator), 0)
            );
        },
        [cartItems]
    );

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
