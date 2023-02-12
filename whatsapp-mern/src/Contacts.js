import React from 'react'
import './Contacts.css'
import Avatar from '@mui/material/Avatar'

function Contacts() {
  return (
  <div className='Contact'>
    <div className='Contacts_icon'><Avatar /></div>
    <div className='Contact_details'>
      <div className='Chat_room'>Chat Room</div>
      <div className='Last_message'>The last message</div>
    </div>
  </div>
  )
}

export default Contacts
