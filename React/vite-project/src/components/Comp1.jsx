import React,{useEffect, useState} from 'react'

function Comp1() {
    const [count1 , setCount1] = useState(0);

    useEffect(()=>{
        alert("Component 1 mounted");

        return ()=>{
            alert("Component 1 unmounted");
        }
    },[]);

    useEffect(()=>{
        alert("Component 1 updated with count = " + count1);

        return ()=>{
            alert("Component 1 removed with count = " + count1);
        }
    },[count1]);

  return (
    <div style={{margin : "5px", backgroundColor:"red", padding : "5px",border: "2px solid black"}}>
      <h1>Component 1 : {count1}</h1>
      <button onClick={()=>setCount1(count1+1)}>Add count 1</button>
    </div>
  )
}

export default Comp1
