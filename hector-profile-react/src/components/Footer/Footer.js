import React from 'react';
import PropTypes from 'prop-types';

import './style';

const Footer = (props, context) => {
  const { theme: { colorPrimary, textPrimary } } = context;
  return (
    <footer>
      <div className="content-grid">
        <div style={{ color: textPrimary }}>Made with<span role="img" aria-label="heart"> ❤️ by </span> <a href="https://www.linkedin.com/in/hnorzagaray/" target="_blank" rel="noopener noreferrer" style={{ color: colorPrimary }}>Hector Norza nzytag.com</a> </div>
      </div>
    </footer>
  );
};

Footer.contextTypes = {
  theme: PropTypes.any,
  switchTheme: PropTypes.func
};

export default Footer;