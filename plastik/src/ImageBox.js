import React from 'react';
import './ImageBox.css';

const ImageBox = () => {
  const images = [
    'resources/r1.JPG', // Replace with your image paths or URLs
    'image2.jpg',
    'image3.jpg',
    'image4.jpg',
    'image5.jpg',
    'image6.jpg'
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
