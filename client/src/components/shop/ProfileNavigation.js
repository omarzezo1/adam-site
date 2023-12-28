import React from 'react'
import {Link} from 'react-router-dom'

const ProfileNavigation = () => {
  return (
    <ul className='profile-navigation'>
    <li><Link to="/add-address">ADD NEW ADDRESS</Link></li>
    <li><Link to="/profile">PROFILE</Link></li>
  </ul>
  )
}

export default ProfileNavigation