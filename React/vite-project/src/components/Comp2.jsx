import React,{useState,useEffect} from 'react'

function Comp2() {
    const [count2 , setCount2] = useState(0);

    useEffect(()=>{
            alert("Component 2 mounted");
    
            return ()=>{
                alert("Component 2 unmounted");
            }
        },[]);
    
    useEffect(()=>{
            alert("Component 2 updated with count = " + count2);
    
            return ()=>{
                alert("Component 2 removed with count = " + count2);
            }
        },[count2]);


  return (
    <div style={{margin : "5px", backgroundColor:"aqua", padding : "5px",border: "2px solid black"}}>
      <h1>Component 2 : {count2}</h1>
      <button onClick={()=>setCount2(count2+1)}>Add count 2</button>
    </div>
  )
}

export default Comp2;
