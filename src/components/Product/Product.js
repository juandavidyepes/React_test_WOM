import React from 'react';
import './product.css';

function Product(props) {
  const { image, name, price, points } = props;
  const newPrice = price.toLocaleString();
  return (
    <div className='product'>
      <img src={image} alt='product' className='logoProduct'></img>
      <h3 className='name' value='Hola'>
        {name}
      </h3>
      <h3 className='price'>$ {newPrice}</h3>
      <h3 className='points'>Obtienes {points} puntos</h3>
    </div>
  );
}

export default Product;
