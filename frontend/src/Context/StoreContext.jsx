import React, { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState({});

    const addToCart = (itemId) => {
        if (!cartItems[itemId]) {
            setCartItems({ ...cartItems, [itemId]: 1 });
        } else {
            setCartItems({ ...cartItems, [itemId]: cartItems[itemId] + 1 });
        }
    };

    const removeFromCart = (itemId) => {
        if (cartItems[itemId] === 1) {
            const newCartItems = { ...cartItems };
            delete newCartItems[itemId];
            setCartItems(newCartItems);
        } else {
            setCartItems({ ...cartItems, [itemId]: cartItems[itemId] - 1 });
        }
    };

    const getTotalCartAmount = () => {
        let total = 0;
        for (const item in cartItems) {
            const foodItem = food_list.find((food) => food._id === item);
            total += foodItem.price * cartItems[item];
        }
        return total*10;
    };
    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {children}
        </StoreContext.Provider>
    );
};

StoreContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default StoreContextProvider;
