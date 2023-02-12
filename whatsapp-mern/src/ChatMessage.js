import React from 'react'
import "./ChatMessage.css";
function ChatMessage({messages}) {
  return (
    <div>
      {messages.map((message) => (
        <p className={`Message_sent ${message.received && "Message_received"}`}>
          <span className={'Chat_name'}>{message.name}</span>
          {message.message}
          <span className='timestamp'>{message.timestamp}</span>
        </p>
      ))}
      </div>
  )
}

export default ChatMessage
