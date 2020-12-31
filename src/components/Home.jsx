import React from 'react';
import Typed from 'react-typed';
import { Button } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import Box from '@material-ui/core/Box';
const Home = () => {
  const description = [
    {
      title: 'WHO WE ARE',
      content: `Our goal is to nurture cats with love and enthusiasm, and pass
    this happiness to more families.`,
    },
    {
      title: 'PROUD BREEDERS',
      content: `Our cattery breeds British Shorthair kittens in silver and
    golden colors. We do not breed other breeds. We do not
    mass-produce kittens. Our British Shorthair cats and kittens
    are purebred and registered with CFA (The Cat Fanciers’
    Association).`,
    },
    {
      title: 'HEALTH GUARANTEE',
      content: ` Our cats are FIV, FeLV & PKD free and blood tested. We
      guarantee that kittens left in our cattery are healthy. Your
      kittens will have a 6-weeks free pet insurance start from the
      rehome date. We also offer a 1-year genetic defects or
      congenital disease warranty to ensure you receive a healthy
      kitty. Contact us to get more information and reserve your
      chubby cheeks little bear. *Messages will be replied on
      Instagram.`,
    },
  ];
  const Board = ({ title, content }) => {
    return (
      <Box m={2} p={2} width="400px" className="board" my="20px">
        <h3>{title}</h3>
        <h5>{content}</h5>
      </Box>
    );
  };
  return (
    <div id="home" className="intro route bg-image">
      <div className="intro-content display-table">
        <div className="table-cell">
          <div className="container">
            <div style={{ textAlign: 'left', width: '700px', margin: 'auto' }}>
              <h1 className="whiteColor">
                Welcome to <b>Dingdong Paw Cattery</b>!
              </h1>
              <br />
            </div>
            <Box justifyContent="center" width="400px" ml="40px">
              {description.map(({ title, content }, i) => (
                <Board title={title} content={content} index={i} />
              ))}
            </Box>
            <br />
            {/* <p className="intro-subtitle">
              <span className="text-slider-items"></span>
              <strong className="text-slider">
                <Typed
                  strings={[
                    'British Shorthair',
                    'CFA Cattery',
                    'Golden and Silver Shaded',
                  ]}
                  typeSpeed={80}
                  backDelay={1100}
                  backSpeed={30}
                  loop
                />
              </strong>
            </p> */}
            <p>
              <IconButton
                aria-label="youtube"
                onClick={() =>
                  window.open(
                    'https://www.youtube.com/channel/UCib4UAvZU4ivJvJdeqxtCcw'
                  )
                }
              >
                <YouTubeIcon fontSize="large" style={{ color: 'white' }} />
              </IconButton>
              <IconButton
                aria-label="instagram"
                onClick={() =>
                  window.open('https://www.instagram.com/dingdong_paw')
                }
              >
                <InstagramIcon fontSize="large" style={{ color: 'white' }} />
              </IconButton>
            </p>
            {/* <Button
              variant="outlined"
              className="btn btn-primary btn js-scroll"
              href="/adoption_steps"
              size="large"
              style={{
                color: 'white',
                borderColor: 'white',
                width: '400px',
                height: '100px',
                fontSize: 20,
              }}
            >
              How to adopt our kitten
            </Button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
