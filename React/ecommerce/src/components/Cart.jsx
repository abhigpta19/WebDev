import React from 'react'
import './Cart.css'
import { useContext } from 'react'
import { CartContext } from '../contexts/CartContext'

function Cart() {
    alert("cart rendered")
    const {cartPrice , cartItems , removeFromCart, addQuantity, removeQuantity} = useContext(CartContext);
  return (
    <div className='cart-cont'>
      <h1>Cart : ${cartPrice}</h1>
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
                        <button onClick={()=>addQuantity(item)}>+</button>
                        {item.quantity}
                        <button onClick={()=>removeQuantity(item)}>-</button>
                        </div>
                        <br/>
                        <button onClick={()=>removeFromCart(item)}>Remove</button>
                    </div>
                    
                </div>
            </>
        ))
      }
    </div>
  )
}

export default Cart
