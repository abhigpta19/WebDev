import React, { useContext } from 'react'
import './Card.css'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/slices/cartReducer';

function Card({item}) {

  const dispatch = useDispatch();
  return (
    <div key={item.id} className="product">
            <img src={item.imgUrl} alt={item.name} style={{height:"100px" , width:"100px"}}/>
            <h3>{item.name}</h3>
            <p>${item.price.toFixed(2)}</p>
            <button onClick={()=>dispatch(addToCart(item))}>Add to Cart</button>
        </div>
  )
}

export default Card
