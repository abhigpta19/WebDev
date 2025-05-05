import React from 'react'

function Tiktaktoe() {

    const [arr,setArr]= useState(new Array(9).fill(null));
  return (
    <div className='grid-container'>
      {
        arr.map((val,idx)=>{
            return (<div style={{width:"50px","height":"50px",}}>
            </div>)
        })
      }
    </div>
  )
}

export default Tiktaktoe
