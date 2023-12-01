import React, { useState } from 'react';
import './ChatBox.css';

const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');

  const handleSend = () => {
    if (inputMessage) {
      setMessages([...messages, inputMessage]);
      setInputMessage('');
    }
  };

  const handleFileUpload = (event) => {
    // Handle the file upload logic here
    const file = event.target.files[0];
    console.log('File uploaded:', file.name);
    // You can process the file further as needed
  };

  return (
    <>
        <div className="chat-box">
        <div className="messages">
            {messages.map((msg, index) => (
            <p key={index}>{msg}</p>
            ))}
        </div>
        <div className="input-area">
            <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Add a constraint..."
            />
            <button onClick={handleSend}>Add</button>
        </div>
        </div>
    </>
  );
};

export default ChatBox;
