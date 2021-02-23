import React from 'react';

const ImageGalleryItem = ({ images, onImageClick }) => {
  return images.map(image => (
    <li className="ImageGalleryItem" key={image.id}>
      <img
        src={image.webformatURL}
        alt={image.tags}
        className="ImageGalleryItem-image"
        onClick={() => onImageClick(image.id)}
      />
    </li>
  ));
};

export default ImageGalleryItem;
