import "./ModalCart.css";
import { PropTypes } from "prop-types";
import CartProduct from "../Cart-product/CartProduct";
import { formatPrice } from "../../services/utils";
import Modal from "../Modal"

function ModalCart({
  products,
  isOpen,
  close,
  totalPrice,
  removeFromCart,
  setProductQuantity,
}) {
  return (
    <div className={`modal ${isOpen ? `modal--is-visible` : ""}`}>
      <div className="overlay" onClick={close}></div>
      <div className="modal-cart">  
        <header className='modal-cart__header'>
          <button className="close-modal-cart" onClick={close}>
            x
          </button>
          <h2>Cart</h2>
        </header>
        <div className=""> {/* modal-cart__product */}
          {products.length > 0 ? (
            products.map((product) => (
              <CartProduct
                key={product.id}
                product={product}
                removeFromCart={removeFromCart}
                setProductQuantity={setProductQuantity}
              />
            ))
          ) : (
            <p className="ModalCart__content__empty">The cart is empty</p>
          )}
        </div>
        <footer className='modal-cart__footer'>Total: {formatPrice(totalPrice)}</footer>
      </div>
    </div>
  );
}

ModalCart.propTypes = {
  products: PropTypes.array.isRequired,
  totalPrice: PropTypes.number.isRequired,
  isOpen: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
  setProductQuantity: PropTypes.func.isRequired,
};

export default ModalCart;