import React from 'react'
import './Item.css'
import Card from './Card';

const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 80,
      imgUrl: "https://tinyurl.com/42xsuupe"
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 100,
      imgUrl: "https://tinyurl.com/f9fmu8ms"
    },
    {
      id: 3,
      name: "Running Shoes",
      price: 50,
      imgUrl: "https://tinyurl.com/yxrjr7vu"
    },
    {
      id: 4,
      name: "Backpack",
      price: 400,
      imgUrl: "https://tinyurl.com/y4e3z2fr"
    }
  ];
  

function ItemContainer() {
  return (
    <div className='parent'>
        <h1>Items</h1>
        <div className='item-cont'>
        {products.map((item) => (
            <Card item={item} key={item.id}/>
            ))}
        </div>
    </div>
  )
}

export default ItemContainer
