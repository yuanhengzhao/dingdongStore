import React from 'react';
import carrier1 from '../img/carrier.jpg';
import carrier2 from '../img/carrier2.jpg';
import catTree1 from '../img/cat_tree1.jpg';
import catTree2 from '../img/cat_tree2.jpg';
import catTree3 from '../img/cat_tree3.jpg';
import catTree4 from '../img/cat_tree4.jpg';
import catTree5 from '../img/cat_tree5.jpg';
import food1 from '../img/food1.jpg';
import food2 from '../img/food2.jpg';
import food3 from '../img/food3.jpg';
import food4 from '../img/food4.jpg';
const AvailableKittens = () => {
  const products = [
    { image: carrier1, description: 'Petkit Breezy2 Smart Cat Carrier $99.00' },
    { image: carrier2, description: 'Petkit Breezy Smart Cat Carrier $89.00' },
    { image: catTree1, description: 'HONEYPOTCAT 200196 $1380.00' },
    { image: catTree2, description: '6-layer wooden cat tree $449.00' },
    { image: catTree3, description: '3-layer wooden cat tree $39.00' },
    { image: catTree4, description: '4-Layers Cat Tree $189.00' },
    { image: catTree5, description: 'M23 Cat Tree $89.00' },
    {
      image: food1,
      description:
        'TIKI CAT® AFTER DARK™ CHICKEN & QUAIL EGG WET CAT FOOD $2.89',
    },
    {
      image: food2,
      description: 'TIKI CAT® AFTER DARK™ CHICKEN & DUCK WET CAT FOOD $2.89',
    },
    {
      image: food3,
      description: 'TIKI CAT® AFTER DARK™ CHICKEN WET CAT FOOD $2.89',
    },
    {
      image: food4,
      description:
        'TIKI CAT KITTEN MOUSSE CHICKEN WITH CHICKEN LIVER WET CAT FOOD 2.4 OZ $2.89',
    },
  ];
  return (
    <div id="home" className="intro route bg-image">
      <div className="intro-content display-table">
        <div className="table-cell">
          <div className="container">
            <div className="product-list">
              {products.map((product, index) => (
                <div className="product-row" key={index}>
                  <img src={product.image} alt={product.description} />
                  <p>{product.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailableKittens;
