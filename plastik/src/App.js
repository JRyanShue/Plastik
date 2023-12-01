import React from 'react';
import './App.css';
import ChatBox from './ChatBox';
import FileUploadBox from './FileUploadBox';
import GenerateButton from './GenerateButton'; // Import the new component
import ImageBox from './ImageBox';
import STLViewer from './STLViewer';

function App() {
  return (
    <div className="App">
      <div className="left-panel">
        <ChatBox />
        <FileUploadBox />
        <GenerateButton />
      </div>
      <div className="right-panel">
        <ImageBox />
      </div>
    </div>
  );
}

export default App;
