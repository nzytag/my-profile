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
        <h1 style={{ color: colorPrimary }}>Who is Hector Norza?</h1>
        <div className="about-wrapper">
          <div className="about-content" style={{ color: textPrimary }}>
            <p>
              After spending years and <span className="highlight"> YEARS</span> working on accounting, it sas time to transition into something more challenging. As an artist, I always have this desire to build pretty things. I realized that becoming a developer would give me the tools in order to <span className="highlight"> create that next beautiful site.</span>
            </p>
            <p>
              I started translating websites to spanish and that was my entrance  {' '}
              <span className="highlight">into the wonderful world of developement!. </span>
              {' '} So, I decided to study full time and make the transition into this "new field".{' '}
              <span className="highlight">And now, I make the pretty things!. </span>

            </p>
            <h1 style={{ color: colorPrimary }}>Mobile and Web development are my thing...</h1>

            <p>
            I have worked and want to continue working on Mobile App development, <span className="highlight">{' '}especially working with React Native to create iOS and Android apps. </span>
            
            
  
            </p>
            <h1 style={{ color: colorPrimary }}>Front-end is my passion!</h1>

            <p>
            Being a 
            <span className="highlight">{' '}Full-Stack Developer has made me a better Front-end developer!. </span>
            I understand what needs to be done in every aspect of the application.

            
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
