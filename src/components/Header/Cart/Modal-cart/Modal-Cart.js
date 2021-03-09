import './Modal-Cart.css'

function ModalCart({cart, onRemove, clicked, closeModal, finalPrice, products}) {
  

  return (
    <div className={`modal-cart ${clicked ? 'modal-cart--is-visible' : ''}`}>
      <div className='modal-cart__overlay'>
        <div className='modal-cart__header'>
          <button 
            type='button' 
            onClick={() => closeModal(!clicked)} 
            className='close-modal-cart'
          >x</button>
          <span>Cart</span>
        </div>{
        cart.map((product) => 
          <div className='modal-cart__product'>
            <div className='cart-product__img-wrapper'>
              <img src={product.image} alt=''></img>
            </div>
            <div className='cart-product__description'>
              <h4>{product.title}</h4>
              <span>Qty. 3</span>
              <span>Price: {product.price} €</span>
              <button type='button' onClick={() => onRemove(!cart)}>Remove</button>
            </div>
          </div>
        )}
        <p className='modal-cart__footer'>Total price: {finalPrice} €</p>
      </div>
    </div>
  )
}

export default ModalCart