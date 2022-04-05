import React from "react";

const Photo = (props) => {
  return (
    <div className="photo-container">
      <img src={props.photo.src.large} alt={props.photo.alt} />
    </div>
  );
};

export default Photo;
