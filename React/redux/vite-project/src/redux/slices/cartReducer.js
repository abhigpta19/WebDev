import {createSlice} from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name : "cart",
    initialState : {
        cartValue : 0,
        cartItems : []
    },
    reducers : {
        addToCart : (state,action)=>{
            const exist = state.cartItems.some(val => val.id === action.payload.id);
            if(exist)
            {
                alert("the item is already added to the cart");
                return;
            }
            state.cartItems.push({...action.payload,quantity:1});
            state.cartValue += action.payload.price;
        },
        removeFromCart : (state,action)=>{
            state.cartItems=state.cartItems.filter(val=> val.id !== action.payload.id);
            state.cartValue -= action.payload.quantity*action.payload.price;
        },
        addQuantity : (state,action)=>{
            state.cartValue += action.payload.price;
            state.cartItems = state.cartItems.map((val)=>{
                if(val.id === action.payload.id)
                    return {...val,quantity:action.payload.quantity + 1};

                return {...val};
            })
        },
        removeQuantity : (state,action)=>{
            if(action.payload.quantity === 0)
            {
                alert("cant go beyond zero");
                return;
            }

            state.cartValue -= action.payload.price;
            state.cartItems = state.cartItems.map((val)=>{
                if(val.id === action.payload.id)
                    return {...val,quantity:action.payload.quantity - 1};

                return {...val};
            })
        }
    }
})

console.log(cartSlice);

export const { addToCart, removeFromCart, addQuantity, removeQuantity} = cartSlice.actions;
export default cartSlice.reducer;