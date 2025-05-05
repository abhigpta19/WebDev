import React from 'react'
import { useParams } from 'react-router-dom'

function Details() {

    const {userid , name} = useParams();
   return (
    <div>
      This is details page with userid = {userid} and name = {name}
    </div>
  )
}

export default Details
