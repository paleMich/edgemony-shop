import {useState} from 'react'
import ModalCart from './Modal-cart/Modal-Cart'

import './Cart.css'

export function Cart({cart, onClose, products}){
  const [clickCart, setClickCart] = useState(false)
  
  const finalPrice = cart.reduce((partialAdd, cartItem) => {
    const product = products.find(product => product.id === cartItem.id)
    return partialAdd + product.price}, 0).toFixed(2)

  return ( 
    <div className='section-cart'>
      { !!cart.length && <span className='price'>{finalPrice} €</span> }
      <div className='cart-icon'>
        <i
          onClick={() => setClickCart(!clickCart)} 
          className="fa fa-shopping-cart" 
          aria-hidden="true">
          <ModalCart 
            cart={cart}
            onRemove={onClose}
            clicked={clickCart}
            closeModal={setClickCart}
            finalPrice={finalPrice}
            products={products}
          />
        </i>
        { !!cart.length && <span className='items-num'>{cart.length}</span> }           {/*  !! uguale a Boolean(csrt.length) */}
      </div>
    </div>
  )
}