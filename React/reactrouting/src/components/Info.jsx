import React from 'react'

function Info({user}) {
  return (
    <div>
      this is {user?"User" : "Admin"} 
    </div>
  )
}

export default Info;
