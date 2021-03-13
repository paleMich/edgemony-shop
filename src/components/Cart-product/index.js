import { PropTypes } from "prop-types";
import { formatPrice } from "../../services/utils";

import "./styles.scss";

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
      <section className='cart-product__description'>
        <h4>{title}</h4>
        <div>
          <button onClick={decrement} disabled={quantity === 1}>
            -
          </button>
          <span>{quantity}</span>
          <button onClick={increment}>+</button>
          <span className="cart-product_price">{formatPrice(price)}</span>
        </div>
        <button className="cart-product_remove" onClick={remove}>
          Remove
        </button>
      </section>
    </div>
  );
}

CartProduct.propTypes = {
  product: PropTypes.object.isRequired,
  removeFromCart: PropTypes.func.isRequired,
  setProductQuantity: PropTypes.func.isRequired,
};

export default CartProduct;