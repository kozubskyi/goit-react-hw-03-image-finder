import React from 'react';
import PropTypes from 'prop-types';

// import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ children }) => {
  return (
    <ul className="ImageGallery">
      {/* <ImageGalleryItem images={images} /> */}
      {children}
    </ul>
  );
};

ImageGallery.defaultProps = {
  children: null,
};

ImageGallery.propTypes = {
  children: PropTypes.node,
};

export default ImageGallery;
