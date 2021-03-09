import './Modal-Cart.css'

function ModalCart({cart, clicked, closeModal}) {
  
  return (
    <div className={`modal-cart ${clicked ? 'modal-cart--is-visible' : ''}`}>
      <div className='modal-cart__overlay'>
        <div className='modal-cart__header'>
          <button onClick={() => closeModal(!clicked)} className='close-modal-cart'>x</button>
          <span>Cart</span>
        </div>{
        cart.map((product) => 
          <div className='modal-cart__product'>
            <div className='cart-product__img-wrapper'>
              <img src={product.image} alt=''></img>
            </div>
            <div className='cart-product__description'>
              <h4>{product.title}</h4>
              <span>Qty: 3</span>
              <span>Price: {product.price} €</span>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ModalCart