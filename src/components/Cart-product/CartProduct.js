import { PropTypes } from "prop-types";
import { formatPrice } from "../../services/utils";

// import "./CartProduct.css";

function CartProduct({ product, removeFromCart, setProductQuantity }) {
  const { image, title, price, quantity, id } = product;
  const increment = () => setProductQuantity(id, quantity + 1);
  const decrement = () => setProductQuantity(id, quantity - 1);
  const remove = () => removeFromCart(id);
  return (
    <div className="CartProduct">
      <img className="CartProduct__image" src={image} alt={title} />
      <h3 className="CartProduct__title">{title}</h3>
      <div className="CartProduct__quantity">
        <button onClick={decrement} disabled={quantity === 1}>
          -
        </button>
        <span>{quantity}</span>
        <button onClick={increment}>+</button>
      </div>
      <p className="CartProduct__price">{formatPrice(price)}</p>
      <button className="CartProduct__remove" onClick={remove}>
        Remove
      </button>
    </div>
  );
}

CartProduct.propTypes = {
  product: PropTypes.object.isRequired,
  removeFromCart: PropTypes.func.isRequired,
  setProductQuantity: PropTypes.func.isRequired,
};

export default CartProduct;