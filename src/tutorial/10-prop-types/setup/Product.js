import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from '../../../assets/default-image.jpeg';

//incase you have an api that has a missing key value pair.
//for example, this particular api, the last object in the array is missing image and price
//so we use the propTypes to solve this.
 
const Product = ({image, name, price}) => {
  // console.log(image, name, price)
  const url = image && image.url;
  return <article className='product'>
    {/* <h4>Single Product</h4> */}
    <img src={url || defaultImage} alt={name} />
    <h4>{name}</h4>
    <p>${price || 3.99}</p>
  </article>;
};

Product.propTypes = {
  image: PropTypes.object.isRequired, //shortcut ptor
  name: PropTypes.string.isRequired,  //shortcut ptsr
  price: PropTypes.number.isRequired,  //shortcut ptnr
};

// Default props
// Product.defaultProps = {
//   name: 'default name',
//   price: 3.99,
//   image: defaultImage
// }
export default Product;
