import React from 'react';
import './App.css';
import ChatBox from './ChatBox';
import FileUploadBox from './FileUploadBox';
import ImageBox from './ImageBox';

function App() {
  return (
    <div className="App">
      <div className="left-panel">
        <ChatBox />
        <FileUploadBox />
      </div>
      <div className="right-panel">
        <ImageBox />
      </div>
    </div>
  );
}

export default App;
