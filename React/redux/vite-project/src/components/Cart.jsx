import React from 'react'
import './Cart.css'
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart , addQuantity, removeQuantity } from '../redux/slices/cartReducer';

function Cart() {
    const cartItems = useSelector(state => state.cart.cartItems);
    const cartValue = useSelector(state => state.cart.cartValue);
    const dispatch = useDispatch();
  return (
    <div className='cart-cont'>
      <h1>Cart : ${cartValue}</h1>
      {
        cartItems.map((item,idx)=>(
            <>
                <div key={item.id} className="product" style={{display : "flex"}}>
                    <img src={item.imgUrl} alt={item.name} style={{height:"100px" , width:"100px"}}/>
                    <div>
                    <h3>{item.name}</h3>
                    <p>${item.price.toFixed(2)}</p>
                    </div>
                    <div style={{marginLeft : "auto"}}>
                        <h3>Quantity</h3>
                        <div>
                        <button onClick={()=>dispatch(addQuantity(item))}>+</button>
                        {item.quantity}
                        <button onClick={()=>dispatch(removeQuantity(item))}>-</button>
                        </div>
                        <br/>
                        <button onClick={()=>dispatch(removeFromCart(item))}>Remove</button>
                    </div>
                    
                </div>
            </>
        ))
      }
    </div>
  )
}

export default Cart
