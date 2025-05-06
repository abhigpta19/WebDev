import React from 'react'
import './MainBody.css'
import ItemContainer from './ItemContainer'
import Cart from './Cart'

function MainBody() {
  return (
    <div className='body-container'>
      <ItemContainer/>
      <Cart/>
    </div>
  )
}

export default MainBody
