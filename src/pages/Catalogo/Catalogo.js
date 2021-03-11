import React, { useState, useEffect } from 'react';
import Navigation from '../../components/Navigation/Navigation';
import Bread from '../../components/Toolbar/BarCat';
import Product from '../../components/Product/Product';

import './catalogo.css';

function Catalogo() {
  const [catalogue, setCatalogue] = useState([]);

  const getProducts = async () => {
    let token = localStorage.getItem('token');
    const resp = await fetch(
      'https://www.wonapp.co/products/top?page=1&per_page=4&category=1',
      {
        method: 'GET',
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );
    const data = await resp.json();
    const cat = [];
    data.data.forEach((element) => {
      const product = {
        id: element.id,
        image: element.image_url,
        name: element.name,
        price: element.value,
        points: element.points,
      };
      cat.push(product);
    });
    setCatalogue(cat);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <Navigation />
      <Bread />
      <div className='products'>
        {catalogue.map((element) => {
          return (
            <Product
              key={element.id}
              image={element.image}
              name={element.name}
              price={element.price}
              points={element.points}
            ></Product>
          );
        })}
      </div>
    </div>
  );
}

export default Catalogo;
