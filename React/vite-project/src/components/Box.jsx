import React from 'react'

function Box({value}) {
    const styles = {
        height : "50px",
        width : "50px",
        border : "2px solid black"
    }
  return (
    <div style={styles}>
      {value}
    </div>
  )
}

export default Box
