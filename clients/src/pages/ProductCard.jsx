
import React from 'react';
import { useAuth } from '../ContextApi/TokenApi';

const ProductCard = ({ imgSrc, title, price, productId }) => {
  const { addToCart } = useAuth();

  return (
    <div className='col-md-4 col-10 mx-auto'>
      <div className="card">
        <img src={imgSrc} alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <h4 className='product-price'>${price}</h4>
          <button className="btn-primary" onClick={() => addToCart({ id: productId, imgSrc, title, price, quantity: 1 })}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
