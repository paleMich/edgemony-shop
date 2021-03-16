import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";

import { fetchProduct } from "./../services/api";


function Product() {
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

  return product ? (
    
      <div className="content">
        <div className='img-modal'>
          <img src={product.image} alt={product.title} />
        </div>
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <div className='footer-modal'>
          {/* <button type="button" className="add-cart" onClick={toggleCart}>
              {inCart ? "Remove" : "Add to Cart"}
            </button> */}
          <span>Price: {product.price}€</span>
        </div>
      </div>
    ) : (
      <div>Loading product..</div>
    );
}

export default Product;