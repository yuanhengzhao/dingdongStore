import React from 'react';
import Box from '@material-ui/core/Box';

const Home = () => {
  const description = [
    {
      title: 'WHO WE ARE',
      content: `We provide all cat related products and services.`,
    },
    {
      title: 'CAT PRODUCTS',
      content: `Discover our company's wide range of cat supplies! From cat trees and scratching posts to cozy cat beds and litter boxes, we have everything your feline friend needs. Our products are reasonably priced, ensuring great value for money, and they come with a guarantee of quality. We take pride in offering cat owners products that are loved by our customers. Shop with us and provide your beloved cat with the best supplies they deserve!`,
    },
  ];
  const Board = ({ title, content }) => {
    return (
      <Box m={2} p={2} maxWidth="400px" className="board" my="20px">
        <h3>{title}</h3>
        <h5>{content}</h5>
      </Box>
    );
  };
  return (
    <Box justifyContent="center" width="80%" ml="40px">
      {description.map(({ title, content }, i) => (
        <Board title={title} content={content} index={i} />
      ))}
    </Box>
  );
};

export default Home;
