import { PropTypes } from "prop-types";

import { useState, useEffect } from "react";
import {
  useParams,
} from "react-router-dom";

import { fetchProduct } from "../../services/api";

import './styles.scss';

function Product({ addToCart, removeFromCart, inCart }) {
  let { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchProduct(productId)
      .then((product) => {
        setProduct(product);
      })
    // .catch((err) => setApiError(err.message))
    // .finally(() => setIsLoading(false));
  }, [productId])         // se cambio pagina voglio rifare il load/effect della pagina 

  const toggleCart = () => {
    if (inCart(product)) {
      removeFromCart(product.id);
    } else {
      addToCart(product);
    }
  };

  return product ? (
    <>
      <div className="Product">
        <div className='img-modal'>
          <img src={product.image} alt={product.title} />
        </div>
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <div className='footer-modal'>
          <button type="button" className="add-cart" onClick={toggleCart}>
            {inCart(product) ? "Remove" : "Add to Cart"}
          </button>
          <span>Price: {product.price}€</span>
        </div>
      </div>
    </>
  ) : (
    <div>Loading product..</div>
  );
}

Product.propTypes = {
  addToCart: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
  inCart: PropTypes.func.isRequired,
};


export default Product;