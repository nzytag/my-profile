import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const SocialIcons = (props, context) => {
  const { theme: { colorPrimary } } = context;
  
  return (
    <div className="social-icons animate-icons">
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/nzytag" style={ { color: colorPrimary } }><i className="fab fa-github"></i></a>

        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/hnorzagaray" style={ { color: colorPrimary } }><i className="fab fa-linkedin-in"></i></a>
        
        <a target="_blank" rel="noopener noreferrer" href="https://medium.com/@hnorzagaray" style={ { color: colorPrimary } }><i className="fab fa-medium"></i></a>

        <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/hnorzagaray" style={ { color: colorPrimary } }><i className="fab fa-twitter"></i></a>

        <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/soyseattle/" style={ { color: colorPrimary } }><i className="fab fa-instagram"></i></a>
      </div>
  );
};

SocialIcons.contextTypes = {
  theme: PropTypes.any
};

export default SocialIcons;