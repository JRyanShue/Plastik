import React from 'react';
import './App.css';
import ChatBox from './ChatBox';
import FileUploadBox from './FileUploadBox';
import GenerateButton from './GenerateButton'; // Import the new component
import {ImageBoxBefore, ImageBoxAfter} from './ImageBox';
import STLViewer from './STLViewer';
import EditorBox from './EditorBox';
import ThreeColumnLayout from './ThreeColumnLayout';

function App() {
  return (
    <div className="App">
      {/* <div className="left-panel">
        <ChatBox />
        <FileUploadBox />
        <GenerateButton />
      </div> */}
      {/* <div className="right-panel">
        <ImageBoxBefore />
      </div> */}
      <div className="left-panel-after">
        <ImageBoxAfter />
      </div>
      <div className="right-panel-after">
        <ThreeColumnLayout />
      </div>
    </div>
  );
}

export default App;
