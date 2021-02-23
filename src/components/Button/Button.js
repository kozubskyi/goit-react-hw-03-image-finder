import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ fetchImages }) => {
  return (
    <button type="button" className="Button" onClick={fetchImages}>
      Загрузить еще
    </button>
  );
};

Button.propTypes = {
  fetchImages: PropTypes.func.isRequired,
};

export default Button;
