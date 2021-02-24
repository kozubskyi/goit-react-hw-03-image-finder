import React from 'react';
import PropTypes from 'prop-types';

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

ImageGalleryItem.defaultProps = {
  images: [],
};

ImageGalleryItem.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  onImageClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
