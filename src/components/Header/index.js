import PropTypes from "prop-types";
import {
  Link,
} from "react-router-dom";

import Cart from "../Header-cart";
import "./styles.scss";

function Header({ logo, title, cartTotal, cartSize }) {
  return (
    <header className="Header">
      <Link to='/'>
        <img src={logo} alt={title} />
      </Link>
      <Cart
        cartTotal={cartTotal}
        cartSize={cartSize}
      />
    </header >
  );
}

Header.propTypes = {
  logo: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  cartTotal: PropTypes.number.isRequired,
  cartSize: PropTypes.number.isRequired,
};

export default Header;