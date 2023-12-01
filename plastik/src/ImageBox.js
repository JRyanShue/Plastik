import React from 'react';
import './ImageBox.css';

const ImageBox = () => {
  const images = [
    'resources/r1.jpg', // Replace with your image paths or URLs
    'resources/r2.jpg',
    'resources/r3.jpg',
    'resources/r2.jpg',
    'resources/r2.jpg',
    'resources/r2.jpg'
  ];

  return (
    <div className="image-box">
      {images.map((img, index) => (
        <img key={index} src={img} alt={`img-${index}`} />
      ))}
    </div>
  );
};

export default ImageBox;
