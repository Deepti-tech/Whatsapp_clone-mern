import React from 'react'
import "./Sidebar.css";
import ChatIcon from '@mui/icons-material/Chat';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';

import Contacts from './Contacts';
function Sidebar() {
  return (
    <div className='Sidebar'>
      <div className='Header'>
        <div className='Header_left'>
          <IconButton><Avatar/></IconButton>
        </div>
        <div className='Header_right'>
          <IconButton><DonutLargeIcon/></IconButton>
          <IconButton><ChatIcon/></IconButton>
          <IconButton><MoreVertIcon/></IconButton>
        </div>
      </div>
      <div className='Searchbar'>
      <TextField fullWidth
          sx={{ m: 1.5, width: '95%', backgroundColor: 'light-gray', opacity: [0.9, 0.9, 0.7]}}
          InputProps={{
            startAdornment: <InputAdornment position="start"><SearchIcon/></InputAdornment>,
            placeholder: 'Search or start new chat',
          }}
          variant="filled"
        />
      </div>
      <div className='Contacts'>
        <Contacts/>
        <Contacts/>
        <Contacts/>
        <Contacts/>
        <Contacts/>
        <Contacts/>
        <Contacts/>
        <Contacts/>
        <Contacts/>
        <Contacts/>
        <Contacts/>
      </div>
    </div>
  )
}

export default Sidebar
