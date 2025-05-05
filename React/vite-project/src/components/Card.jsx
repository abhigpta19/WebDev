import React from 'react'
import './Card.css'

function Card({img,title,desc,color}) {

  return (
    <div className='cont' style={{backgroundColor:color}}>
        <img src={img} alt="" />
        <h1>{title}</h1>
        <h3>{desc}</h3>
    </div>
  )
}

export default Card
