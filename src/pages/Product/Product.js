import { PropTypes } from "prop-types";

import { useState, useEffect } from "react";
import {
  useParams,
} from "react-router-dom";

import { fetchProduct } from "../../services/api";

import Loader from "../../components/Loader";
import ErrorBanner from "../../components/Error";

import './styles.scss';

function Product({ addToCart, removeFromCart, inCart }) {
  let { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState("");
  const [retry, setRetry] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setApiError("");
    fetchProduct(productId)
      .then((product) => {
        setProduct(product);
      })
      .catch((err) => setApiError(err.message))
      .finally(() => setIsLoading(false));
  }, [productId, retry])         // se cambio pagina voglio rifare il load/effect della pagina 

  const toggleCart = () => {
    if (inCart(product)) {
      removeFromCart(product.id);
    } else {
      addToCart(product);
    }
  };

  return product ? (
    <>
      {isLoading ? (
        <Loader />
      ) : apiError ? (
        <ErrorBanner
          message={apiError}
          close={() => setApiError("")}
          retry={() => setRetry(!retry)}
        />
      ) : (
        <div className='pageProduct'>
          <div className='sectionProduct'>
            <div className="Product">
              <span className="img1-prd">img 1</span>
              <span className="img2-prd">img 2</span>
              <span className="img3-prd">img 3</span>
              <div className='img-prd'>
                <img src={product.image} alt={product.title} />
              </div>
              <h1>{product.title}</h1>
              <p>{product.description}</p>
              <div className='footer-prd'>
                <button type="button" className="add-cart" onClick={toggleCart}>
                  {inCart(product) ? "Remove" : "Add to Cart"}
                </button>
                <span>Price: {product.price}€</span>
              </div>
            </div>
          </div>
        </div>
      )}
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