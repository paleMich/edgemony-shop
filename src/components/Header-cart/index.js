import PropTypes from "prop-types";
import {
  Link,
} from "react-router-dom";

import { formatPrice } from "../../services/utils";
import "./styles.scss";

function HeaderCart({ cartTotal, cartSize, onCartClick }) {
  return (
    <div className="section-cart">
      {!!cartSize && <span className="price">{formatPrice(cartTotal)}</span>}
      <Link to='/cart'>
        <div className="cart-icon">
          <i className="fas fa-shopping-cart"></i>
          {!!cartSize && <span className="items-num">{cartSize}</span>}
        </div>
      </Link>
    </div>
  );
}

HeaderCart.propTypes = {
  cartTotal: PropTypes.number.isRequired,
  cartSize: PropTypes.number.isRequired,
  onCartClick: PropTypes.func.isRequired,
};

export default HeaderCart;
