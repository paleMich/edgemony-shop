import "./ModalCart.css";
import { PropTypes } from "prop-types";
import CartProduct from "../Cart-product/CartProduct";
import { formatPrice } from "../../services/utils";

function ModalCart({
  products,
  isOpen,
  close,
  totalPrice,
  removeFromCart,
  setProductQuantity,
}) {
  return (
    <div className={`ModalCart ${isOpen ? `is-open` : ""}`}>
      <div className="" onClick={close}></div>
      <div className="">      {/* modal-cart__overlay */}
        <header className='modal-cart__header'>
          <button className="close-modal-cart" onClick={close}>
            x
          </button>
          <h2 className="ModalCart__title">Cart</h2>
        </header>
        <div className="modal-cart__product">
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