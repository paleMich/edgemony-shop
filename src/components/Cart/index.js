import PropTypes from "prop-types";

import { formatPrice } from "../../services/utils";
import "./styles.css";

function HeaderCart({ cartTotal, cartSize, onCartClick }) {
  return (
    <div className="section-cart">
      {!!cartSize && <span className="price">{formatPrice(cartTotal)}</span>}
      <div className="cart-icon" onClick={onCartClick}>
        <i className="fas fa-shopping-cart"></i>
        {!!cartSize && <span className="items-num">{cartSize}</span>}
      </div>
    </div>
  );
}

HeaderCart.propTypes = {
  products: PropTypes.array.isRequired,
  cartTotal: PropTypes.number.isRequired,
  cartSize: PropTypes.number.isRequired,
  onCartClick: PropTypes.func.isRequired,
};

export default HeaderCart;