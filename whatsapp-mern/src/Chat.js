import React, { useState } from 'react'
import "./Chat.css";
import "./Sidebar.css";
import {Avatar, IconButton} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import MoodIcon from '@mui/icons-material/Mood';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MicIcon from '@mui/icons-material/Mic';
import ChatMessage from './ChatMessage';
import axios from "./axios"

function Chat({messages}) {
  const [input, setInput] = useState("");
  const sendMessage = async(e) => {
    e.preventDefault();
    await axios.post('/messages/new', {
      message: input,
      name: "Deepti",
      timestamp: "now",
      received: false
    })

    setInput('')
  }
  return (
    <div className='Chat'>
      <div className='Header'>
        <div className='Header_left' id='Chat_header_left'>
          <div><IconButton><Avatar/></IconButton></div>
          <div className='ChatRoom_info'>
            <div className='Chat_room'>Room Name</div>
            <div className='Status'>Online</div>
          </div>
        </div>
        <div className='Header_right'>
          <IconButton><SearchIcon/></IconButton>
          <IconButton><MoreVertIcon/></IconButton>
        </div>
      </div>
      <div className='Chat_history'>
        <ChatMessage messages={messages}/>
      </div>
      <div className='Chat_footer'>
          <IconButton><MoodIcon/></IconButton>
          <IconButton><AttachFileIcon/></IconButton>
          <form>
          <input type='text' placeholder='Type a message' value={input} onChange={(e) => setInput(e.target.value)}/>
          <button id='enter' onClick={sendMessage} type="submit"></button>
          </form>
          <IconButton><MicIcon/></IconButton>
      </div>
    </div>
  )
}

export default Chat
