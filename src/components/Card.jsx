import React from 'react';

const ImageCardComponent = ({ data }) => {
  return (
    <div className="card-container">
      <img src={data.image} alt={data.text} />
      <p>{data.text}</p>
    </div>
  );
};

export default ImageCardComponent;