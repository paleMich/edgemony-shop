import PropTypes from "prop-types";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

import Cart from "../Header-cart";
import "./styles.scss";

function Header({ logo, title, cartTotal, cartSize, products, onCartClick }) {
  return (
    <header className="Header">
      <Link to='/'>
        <img src={logo} alt={title} />
      </Link>
      <Cart
        cartTotal={cartTotal}
        cartSize={cartSize}
        products={products}
        onCartClick={onCartClick}
      />
    </header >
  );
}

Header.propTypes = {
  logo: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  cartTotal: PropTypes.number.isRequired,
  cartSize: PropTypes.number.isRequired,
  products: PropTypes.array.isRequired,
  onCartClick: PropTypes.func.isRequired,
};

export default Header;