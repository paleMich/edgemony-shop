import PropTypes from "prop-types";
import {
  Link,
} from "react-router-dom";

import { formatPrice } from "../../services/utils";
import "./styles.scss";

function HeaderCart({ cartTotal, cartSize }) {
  return (
    <div className="section-cart">
      {!!cartSize && <span className="price">{formatPrice(cartTotal)}</span>}
      <div className="cart-icon">
        <Link to='/cart'>
          <i className="fas fa-shopping-cart"></i>
          {!!cartSize && <span className="items-num">{cartSize}</span>}
        </Link>
      </div>
    </div>
  );
}

HeaderCart.propTypes = {
  cartTotal: PropTypes.number.isRequired,
  cartSize: PropTypes.number.isRequired,
};

export default HeaderCart;
