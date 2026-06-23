import { createContext, useState } from "react";
import { food_list, menu_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

    const [cartItems, setCartItems] = useState({});

    const addToCart = (itemId) => {
        if (!cartItems[itemId]) {
            setCartItems((prev) => ({
                ...prev,
                [itemId]: 1
            }));
        } else {
            setCartItems((prev) => ({
                ...prev,
                [itemId]: prev[itemId] + 1
            }));
        }
    };

    const removeFromCart = (itemId) => {
        if (cartItems[itemId] > 1) {
            setCartItems((prev) => ({
                ...prev,
                [itemId]: prev[itemId] - 1
            }));
        } else {
            setCartItems((prev) => {
                const newCart = { ...prev };
                delete newCart[itemId];
                return newCart;
            });
        }
    };

    const getTotalCartAmount = () => {
        let totalAmount = 0;

        for (const item in cartItems) {
            const itemInfo = food_list.find(
                (product) => product.food_id === Number(item)
            );

            if (itemInfo) {
                totalAmount += itemInfo.food_price * cartItems[item];
            }
        }

        return totalAmount;
    };

    const contextValue = {
        food_list,
        menu_list,
        cartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;