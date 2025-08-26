import React, { createContext, useContext, useState, useEffect } from "react";


const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState(
        () => {
            const storedCart = localStorage.getItem("cart");
            return storedCart ? JSON.parse(storedCart) : [];
        }
    )

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart])

    // add item to cart
    const addItem = (item) => {
        setCart((prev) => {
            const existing = prev.find((i) => i.id === item.id);
            if (existing) {
                // If item exists, increase quantity
                return prev.map((i) =>
                    i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
                );
            } else {
                return [...prev, { ...item, quantity: 1 }];
            }
        });
    };

    // Remove an item from the cart
    const removeItem = (id) => {
        setCart((prev) => prev.filter((i) => i.id !== id));
    };

    // Update quantity of an item
    const updateQuantity = (id, quantity) => {
        setCart((prev) =>
            prev.map((i) => (i.id === id ? { ...i, quantity } : i))
        );
    };

    // Clear the cart
    const clearCart = () => setCart([]);

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, updateQuantity, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext); // turning this into a hook
