import React from 'react'
import Comp1 from './components/Comp1'
import { useContext } from 'react'
import { CounterContext } from './contexts/CounterContext'

function App() {
  const {count} = useContext(CounterContext);
  return (
    <div>
      <h1>This is app : {count}</h1>
      <Comp1/>
    </div>
  )
}

export default App
