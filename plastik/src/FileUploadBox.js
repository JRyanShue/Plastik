import React from 'react';
import './FileUploadBox.css';

const FileUploadBox = () => {
  const handleFileUpload = (event) => {
    // Handle the file upload logic here
    const file = event.target.files[0];
    console.log('File uploaded:', file.name);
    // Add more logic as needed
  };

  return (
    <div className="file-upload-box">
      <input type="file" onChange={handleFileUpload} />
    </div>
  );
};

export default FileUploadBox;
