import { PropTypes } from "prop-types";

import CartProduct from '../../components/Cart-product';
import { formatPrice } from "../../services/utils";

import './styles.scss';

function Cart({
  products,
  totalPrice,
  removeFromCart,
  setProductQuantity }) {
  return (
    <>
      <div className="ShoppingCart">
        <div className="sectionCart">
          <span className="">Subtotal</span>
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
            ? <footer className='cart__subtotal'>Subtotal ({products.length} item): {formatPrice(totalPrice)}</footer>
            : ''
          }
        </div>
      </div>
    </>
  );
}

Cart.propTypes = {
  products: PropTypes.array.isRequired,
  totalPrice: PropTypes.number.isRequired,
  removeFromCart: PropTypes.func.isRequired,
  setProductQuantity: PropTypes.func.isRequired,
};


export default Cart;