import React from 'react';

const LogoImage = ({ src, alt = 'Creo Homes', className = '' }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={`h-44 w-44 object-contain ${className} `}
    />
  );
};

export default LogoImage;
