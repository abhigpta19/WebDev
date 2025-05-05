import React, { useContext } from 'react'
import './Card.css'
import { CartContext } from '../contexts/CartContext'

function Card({item}) {
    const {addToCart} = useContext(CartContext);
  return (
    <div key={item.id} className="product">
            <img src={item.imgUrl} alt={item.name} style={{height:"100px" , width:"100px"}}/>
            <h3>{item.name}</h3>
            <p>${item.price.toFixed(2)}</p>
            <button onClick={()=>addToCart(item)}>Add to Cart</button>
        </div>
  )
}

export default Card
