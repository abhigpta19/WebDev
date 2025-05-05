import React from 'react'
import { useContext } from 'react'
import { CounterContext } from '../contexts/CounterContext'

function Comp3() {
    const {increament} = useContext(CounterContext);
  return (
    <div>
      <h4>This is Comp3</h4>
      <button onClick={increament}>Add</button>
    </div>
  )
}

export default Comp3
