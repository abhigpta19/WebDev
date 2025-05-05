import React, { useEffect } from 'react'

function Home() {
    useEffect(()=>{
        alert("home mounted");
        return ()=>{
            alert("homem unmounted");
        }
    },[]);
  return (
    <div>
      This is Home
    </div>
  )
}

export default Home
