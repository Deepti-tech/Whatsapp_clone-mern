import './App.css';
import React, { useEffect, useState } from 'react'
import Sidebar  from "./Sidebar";
import Chat  from "./Chat";
import Pusher from "pusher-js";
import axios from "./axios"

function App() {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    axios.get('/messages/sync').then(response => {
      setMessages(response.data)
    })
  }, [])
  useEffect(() => {
    const pusher = new Pusher('1559e7dc130dab879729', {
      cluster: 'ap2'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (newMessage) => {
      setMessages([...messages, newMessage])
    });

    return() => {
      channel.unbind_all();
      channel.unsubscribe();
    }
  }, [messages])
  return (
    <div className="App">
      <div className='App_body'>
        <Sidebar/>
        <Chat messages={messages}/>
      </div>
    </div>
  );
}

export default App;
