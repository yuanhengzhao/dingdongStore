import React from 'react';
import Contact from './Contact';
import About from './About';

const Home = () => {
  return (
    <div id="home" className="intro route bg-image">
      <div className="intro-content display-table">
        <div className="contact-mf">
          <div className="container">
            <div
              style={{
                textAlign: 'left',
                width: '70vw',
                maxWidth: '700px',
                margin: 'auto',
              }}
            >
              <h1 className="whiteColor">
                <p>Welcome to</p>
                <b>Dingdong Paw</b>!
              </h1>
              <br />
            </div>
            <div className="home-box">
              <About />
              <br />
              <div className="endy">
                <Contact />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
