import React from 'react';

import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ children }) => {
  return (
    <ul className="ImageGallery">
      {/* <ImageGalleryItem images={images} /> */}
      {children}
    </ul>
  );
};

export default ImageGallery;
