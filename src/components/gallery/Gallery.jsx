import React, { useState, useEffect } from "react";
import Photo from "./photo/Photo";

const Gallery = () => {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    function searchPhotos() {
      fetch(`https://api.pexels.com/v1/curated`, {
        headers: {
          Authorization:
            "563492ad6f917000010000018ffe0365dd4543c298aa6440a3b0b44f",
        },
      })
        .then((resp) => resp.json())
        .then((resp) => {
          setPhotos(resp.photos);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    searchPhotos();
  }, []);
  return (
    <div className="gallery">
      {photos.map((photo) => (
        <Photo photo={photo} />
      ))}
    </div>
  );
};

export default Gallery;
