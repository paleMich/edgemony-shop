import { PropTypes } from "prop-types";

import "./Product.css";

function Product({ product, openProductModal }) {
  return (
      <article className="Card">
        <div className='img-container'>
          <img src={product.image} alt={product.title} />
        </div>
        <span>{product.title}</span>
        <button onClick={openProductModal}>View details</button>
      </article>
  );
}

Product.propTypes = {
  product: PropTypes.object.isRequired,
  openProductModal: PropTypes.func.isRequired,
};

export default Product;