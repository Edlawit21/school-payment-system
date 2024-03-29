import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import './Username.css'

function Username({username, onLogout}) {
  const handleSignOut = () => {
    onLogout(); 
  };
  return (
    <div className='user-container'>
      <div className='username1'>
        <span className='user-bold'>USER NAME :</span>
        <span className='fetch'>{username}</span>
      </div>
      
      <div className='signout'>
      <button className='user-btn' onClick={handleSignOut}>
        <FontAwesomeIcon icon={faRightFromBracket} size='2x' color='white'/>
        <span className='sign'>SignOut</span>
        </button>
      </div>
      
    </div>
  )
}

export default Username
