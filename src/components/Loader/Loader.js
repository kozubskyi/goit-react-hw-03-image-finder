import React from 'react';

import Loader from 'react-loader-spinner';

const LoaderComponent = () => {
  return (
    <div className="Loader">
      <Loader
        type="Oval"
        color="#00BFFF"
        height={50}
        width={50}
        // timeout={3000} //3 secs
      />
    </div>
  );
};

export default LoaderComponent;
