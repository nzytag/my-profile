import React from 'react';
import PropTypes from 'prop-types';
import ScrollToNext from '@components/ScrollToNext';
import './style.scss';

const AboutPage = (props, context) => {
  const {
    theme: { colorPrimary, colorHighlight, bgPrimary, textPrimary }
  } = context;

  return (
    <div className="about-page" style={{ backgroundColor: bgPrimary }}>
      <style jsx="true">
        {`
          .highlight {
            background-color: ${colorHighlight};
          }
          ::selection {
            background-color: ${colorHighlight};
          }
        `}
      </style>
      <div className="content-grid">
        <h1 style={{ color: colorPrimary }}>About nzytag.com</h1>
        <div className="about-wrapper">
          <div className="about-content" style={{ color: textPrimary }}>
            <p>
              Here at  <span className="highlight">nzytag.com</span> we love
              everything web.
            </p>
            <p>
              Everything started  when{' '} <span className="highlight"> I started translating websites to spanish</span> and decided to go ahead and start venturing into the freelance world in order to always have a new challenge at hand. 
              I realized that technologies are ever changing and I could always have that "new car smell" approach to development. I also also like to{' '}
              <span className="highlight">podcast and blog</span> and talk about the approach I am taking with the most challenging projects.
            </p>
            <h1 style={{ color: colorPrimary }}>Technologies I use</h1>

            <p>
              HTML5, CSS3, JavaScript, Wordpress, React, Node, React Native, Swift, Docker, Blockchain and other frameworks and libraries...Always looking forward to learn new ones also...! 
            </p>
            <p className="text-emoji" style={{ color: colorPrimary }}>
         
            </p>
          </div>
        </div>
      </div>
      <ScrollToNext pageSelector=".portfolio-page" />
    </div>
  );
};

AboutPage.contextTypes = {
  theme: PropTypes.any
};

export default AboutPage;
