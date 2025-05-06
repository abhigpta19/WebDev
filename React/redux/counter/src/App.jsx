import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increamentValue } from './redux/slices/counterSlice';
import { toggleTheme } from './redux/slices/themeSlice';

function App() {
  const theme = useSelector(state => state.theme.theme)
  const count = useSelector(state => {
    return state.counter.value;
  })

  console.log(theme,count);
  
  const dispatch = useDispatch();
  return (
    <div style={(theme === "dark" ) ? {color:"white" , backgroundColor:"black"} : {}}>
      <h1>{count}</h1>
      <button onClick={()=>dispatch(increamentValue([1,5]))}>Add</button>
      <br/>
      <button onClick={()=>dispatch(toggleTheme())}>Toggle Theme</button>
    </div>
  )
}

export default App
