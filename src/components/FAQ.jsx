import React from 'react';
import { data } from '../data/FAQs';
import Faq from 'react-faq-component';
import Contact from './Contact';

const FAQ = () => {
  const styles = {
    titleTextColor: 'black',
    rowTitleColor: 'black',
    rowContentColor: 'grey',
    bgColor: 'none',
  };

  const config = {
    // animate: true,
    // arrowIcon: 'V',
    // tabFocus: true,
  };

  return (
    <div id="home" className="intro route bg-image">
      <div className="intro-content display-table">
        <div className="contact-mf">
          <div className="container">
            <div className="col-sm-12">
              <div className="half-white-board">
                <h5 className="title-left">FAQs</h5>
                <Faq data={data} styles={styles} config={config} />
              </div>
              <Contact />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
