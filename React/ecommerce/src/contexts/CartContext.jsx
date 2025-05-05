import { createContext, useState } from "react";

export const CartContext = createContext(null);

export function CartProvider({children})
{
    const [cartItems, setCartItems] = useState([]);
    const [cartPrice , setCartPrice] = useState(0);

    function addToCart(itm)
    {
        const exists = cartItems.some(val=>val.id === itm.id);
        if(exists)
        {
            alert("The item is already added");
            return;
        }

        setCartItems([...cartItems,{...itm , quantity : 1}]);
        setCartPrice(cartPrice+itm.price);
    }

    function removeFromCart(itm)
    {
        setCartItems(cartItems.filter(val=>val.id!==itm.id))
        setCartPrice(cartPrice-itm.price*itm.quantity);
    }

    function addQuantity(itm)
    {
        setCartPrice(cartPrice+itm.price);
        setCartItems(cartItems.map(val=>{
            if(val.id === itm.id)
                return {...val,quantity:val.quantity+1};

            return {...val};
        }))
    }

    function removeQuantity(itm)
    {
        if(itm.quantity === 0)
        {
            alert("cant go below zero");
            return;
        }

        setCartPrice(cartPrice-itm.price);
        setCartItems(cartItems.map(val=>{
            if(val.id === itm.id)
                return {...val,quantity:val.quantity-1};

            return {...val};
        }))
    }

    return (<CartContext.Provider value={{cartItems, cartPrice , addQuantity, addToCart, removeFromCart , removeQuantity}}>
        {children}
    </CartContext.Provider>);
}