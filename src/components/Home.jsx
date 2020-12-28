import React from "react";
import Typed from "react-typed";
import { Button } from "@material-ui/core";
const Home = () => {
  return (
    <div id='home' className='intro route bg-image'>
      <div className='intro-content display-table'>
        <div className='table-cell'>
          <div className='container'>
            <h1 className='intro-title mb-4'>Ding Dong~~~~</h1>
            <p className='intro-subtitle'>
              <span className='text-slider-items'></span>
              <strong className='text-slider'>
                <Typed
                  strings={[
                    "British Shorthair",
                    "CFA Cattery",
                    "Golden and Silver Shaded",
                  ]}
                  typeSpeed={80}
                  backDelay={1100}
                  backSpeed={30}
                  loop
                />
              </strong>
            </p>
            <h4 style={{ color: "white" }}>Instagram: 1234</h4>
            <h4 style={{ color: "white", marginBottom: "50px" }}>
              Wechat: 1234
            </h4>
            <Button
              variant='outlined'
              className='btn btn-primary btn js-scroll'
              href='/adoption_steps'
              size='large'
              style={{
                color: "white",
                borderColor: "white",
                width: "400px",
                height: "100px",
                fontSize: 20,
              }}
            >
              How to adopt our kitten
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
