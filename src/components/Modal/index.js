import { PropTypes } from "prop-types";

import "./styles.scss";

function ModalProduct({
  content,
  closeModal,
  isOpen,
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
    <div className={`modal ${isOpen ? `modal--is-visible` : ""}`}>
      <div className="overlay" onClick={closeModal} />
      <div className="modal-body">
        <span
          onClick={closeModal}
          title="close product modal"
          className="close-modal"
        >
          close
        </span>
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
      </div>
    </div>
  );
}

ModalProduct.propTypes = {
  product: PropTypes.object,
  closeModal: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  inCart: PropTypes.bool.isRequired,
  addToCart: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
};

export default ModalProduct;