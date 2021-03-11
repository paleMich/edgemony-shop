import { PropTypes } from "prop-types";
import { formatPrice } from "../../services/utils";

import "./CartProduct.css";

function CartProduct({ product, removeFromCart, setProductQuantity }) {
  const { image, title, price, quantity, id } = product;
  const increment = () => setProductQuantity(id, quantity + 1);
  const decrement = () => setProductQuantity(id, quantity - 1);
  const remove = () => removeFromCart(id);
  return (
    <div className="modal-cart__product">
      <div>
        <img className="cart-product__img-wrapper" src={image} alt={title} />
      </div>
      <div className='cart-product__description'>
        <h4>{title}</h4>
        <div className="CartProduct__quantity">
          <button onClick={decrement} disabled={quantity === 1}>
            -
          </button>
          <span>{quantity}</span>
          <button onClick={increment}>+</button>
          <span className="CartProduct__price">{formatPrice(price)}</span>
        </div>
        <button className="CartProduct__remove" onClick={remove}>
          Remove
        </button>
      </div>
    </div>
  );
}

CartProduct.propTypes = {
  product: PropTypes.object.isRequired,
  removeFromCart: PropTypes.func.isRequired,
  setProductQuantity: PropTypes.func.isRequired,
};

export default CartProduct;