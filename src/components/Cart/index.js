import { PropTypes } from "prop-types";
import CartProduct from "../Cart-product";
import { formatPrice } from "../../services/utils";

import "./styles.scss";

function ModalCart({
  products,
  totalPrice,
  removeFromCart,
  setProductQuantity,
}) {
  return (
    <>
      {products.length > 0
        ? (
          products.map((product) => (
            <CartProduct
              key={product.id}
              product={product}
              removeFromCart={removeFromCart}
              setProductQuantity={setProductQuantity}
            />
          ))
        ) : (
          <p className="cart__empty">The cart is empty</p>
        )}
      {totalPrice > 0
        ? <footer className='cart__footer'>Total: {formatPrice(totalPrice)}</footer>
        : ''
      }
    </>
  );
}

ModalCart.propTypes = {
  products: PropTypes.array.isRequired,
  totalPrice: PropTypes.number.isRequired,
  removeFromCart: PropTypes.func.isRequired,
  setProductQuantity: PropTypes.func.isRequired,
};

export default ModalCart;