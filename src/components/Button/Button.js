import React from 'react';

const Button = ({ fetchImages }) => {
  return (
    <button type="button" className="Button" onClick={fetchImages}>
      Загрузить еще
    </button>
  );
};

export default Button;
