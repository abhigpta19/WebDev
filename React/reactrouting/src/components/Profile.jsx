import React from 'react'
import { useParams } from 'react-router-dom'

function Profile() {
    const {userid} = useParams();
  return (
    <div>
      this is the profile  of {userid}
    </div>
  )
}

export default Profile
