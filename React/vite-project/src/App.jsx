import React,{useEffect, useState} from 'react'
import Comp1 from './components/Comp1';
import Comp2 from './components/Comp2';

function App() {
  const [var1 ,setVar1] = useState(true);

  return (
    <>
      {var1 ? <Comp1/> : <Comp2/>}
      <br/>
      <button onClick={()=>setVar1(!var1)}>Toggle</button>
    </>
  );
}

export default App
