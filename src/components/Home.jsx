import React from 'react';
// import Typed from 'react-typed';
import Box from '@material-ui/core/Box';
import Contact from './Contact';

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
        <div className="contact-mf">
          <div className="container">
            <div style={{ textAlign: 'left', width: '700px', margin: 'auto' }}>
              <h1 className="whiteColor">
                <p>Welcome to</p>
                <b>Dingdong Paw Cattery</b>!
              </h1>
              <br />
            </div>
            <Box justifyContent="center" width="80%" ml="40px">
              {description.map(({ title, content }, i) => (
                <Board title={title} content={content} index={i} />
              ))}
            </Box>
            <br />
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
