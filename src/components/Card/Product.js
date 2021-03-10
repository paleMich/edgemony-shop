import { PropTypes } from "prop-types";

import "./Product.css";

function Product({ product, openProductModal }) {
  return (
    <div className='Card-wrapper'>
      <article className="Card">
        <div className='img-container'>
          <img src={product.image} alt={product.title} />
        </div>
        <div className="content">
          <h1>{product.title}</h1>
          <p>Price: {product.price}€</p>
        </div>
        <button onClick={openProductModal}>View details</button>
      </article>
    </div>
  );
}

Product.propTypes = {
  product: PropTypes.object.isRequired,
  openProductModal: PropTypes.func.isRequired,
};

export default Product;