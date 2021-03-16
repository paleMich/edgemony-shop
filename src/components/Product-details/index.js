import { PropTypes } from "prop-types";

import "./styles.scss";

function ProductDetails({
  content,
  inCart,
  addToCart,
  removeFromCart,
}) {
  const toggleCart = () => {
    if (inCart) {
      removeFromCart(content.id);
    } else {
      addToCart(content.id);
    }
  };

  return (
    <>
      {!!content ? (
        <div className="content">
          <div className='img-modal'>
            <img src={content.image} alt={content.title} />
          </div>
          <h4>{content.title}</h4>
          <p>{content.description}</p>
          <div className='footer-modal'>
            <button type="button" className="add-cart" onClick={toggleCart}>
              {inCart ? "Remove" : "Add to Cart"}
            </button>
            <span>Price: {content.price}€</span>
          </div>
        </div>
      ) : null}
    </>
  )
}

ProductDetails.propTypes = {
  product: PropTypes.object,
  inCart: PropTypes.bool.isRequired,
  addToCart: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
};

export default ProductDetails;
