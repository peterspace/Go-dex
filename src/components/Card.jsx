import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ className = 'px-4 py-4 h-fit bg-gray-400', shadow = true, glassmorphic = false, children }) => {
  return (
    <div className={`relative rounded-lg
        ${glassmorphic && 'backdrop-filter backdrop-blur-md bg-opacity-50'}
        ${shadow ? `drop-shadow-lg` : null}
        ${className}`}
      >
        {children}
    </div>
  )
}

export default Card;

Card.propTypes = {
    className: PropTypes.string,
    shadow: PropTypes.bool,
    glassmorphic: PropTypes.bool
}