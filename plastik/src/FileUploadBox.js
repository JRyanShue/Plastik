import React, { useState } from 'react';
import './FileUploadBox.css';

const FileUploadBox = () => {
  const handleFileUpload = (event) => {
    // Handle the file upload logic here
    const file = event.target.files[0];
    console.log('File uploaded:', file.name);
    // Add more logic as needed
  };

  const [dragging, setDragging] = useState(false);

  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!dragging) {
      setDragging(true);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(false);

    const files = e.dataTransfer.files;
    console.log('Files dropped:', files);
    // Process files here
  };

  return (
    // <div className="file-upload-box">
    //   <input type="file" onChange={handleFileUpload} />
    // </div>

    <div 
      className={`file-upload-box ${dragging ? 'dragging' : ''}`}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      Add constraint files
      <input type="file" onChange={e => console.log('File uploaded:', e.target.files[0])} />
    </div>
  );
};

export default FileUploadBox;
