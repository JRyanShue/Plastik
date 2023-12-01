import React from 'react';
import './ImageBox.css';

const ImageBoxBefore = () => {
  const images = [
    // 'resources/r1.jpg', // Replace with your image paths or URLs
    'resources/r2.jpg',
    'resources/r3.jpg',
    'resources/r2.jpg',
    'resources/r2.jpg',
    'resources/r2.jpg'
  ];

  return (
    <div>
        <h2 className="image-box-header">Generated Designs</h2>
        <div className="image-box">
        <img key={5} src="resources/r1.jpg" alt={'img-5'} className="selected"></img>
        {/* <img key={5} src="resources/r1.jpg" alt={'img-5'} ></img> */}
        {images.map((img, index) => (
            <img key={index} src={img} alt={`img-${index}`} />
        ))}
        </div>
    </div>

    // <div className="image-box">
    //     {/* <h2 className="image-box-header">Generated Designs</h2> */}
    //     <button className="generate-button">Generate</button>
    // </div>
  );
};

const ImageBoxAfter = () => {
    const images = [
      // 'resources/r1.jpg', // Replace with your image paths or URLs
      'resources/r2.jpg',
      'resources/r3.jpg',
      'resources/r2.jpg',
      'resources/r2.jpg',
      'resources/r2.jpg'
    ];
  
    return (
      <div>
          {/* <h2 className="image-box-header">Generated Designs</h2> */}
          <div className="image-box-after">
          <img key={5} src="resources/r1.jpg" alt={'img-5'} className="selected"></img>
          {/* <img key={5} src="resources/r1.jpg" alt={'img-5'} ></img> */}
          {/* {images.map((img, index) => (
              <img key={index} src={img} alt={`img-${index}`} />
          ))} */}
          </div>
      </div>
  
      // <div className="image-box">
      //     {/* <h2 className="image-box-header">Generated Designs</h2> */}
      //     <button className="generate-button">Generate</button>
      // </div>
    );
  };

export {ImageBoxBefore, ImageBoxAfter};
