import React, { useContext, useRef } from 'react'

function Login() {
  const inpRef = useRef(null);
  const styles = {
    height : "500px",
    backgroundColor : "aqua",
    border : "2px solid black"
  }

  return (
    <div style={styles}>
      <h1>this is login page</h1>
      <input type="text" ref={inpRef}/>
      <button 
      onClick={()=>{
        console.log(inpRef.current.value)
      }}
      >Login User</button>
    </div>
  )
}

export default Login
