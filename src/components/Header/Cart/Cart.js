import {useState} from 'react'
import ModalCart from './Modal-cart/Modal-Cart'

import './Cart.css'

export function Cart({cart}){
  const [clickCart, setClickCart] = useState(false)
  
  const finalPrice = cart.reduce((partialAdd, a) => partialAdd + a.price, 0)    // function add(accumulator, a) { return accumulator + a }
 
  return ( 
    <div className='section-cart'>
      { !!cart.length && <span className='price'>{finalPrice.toFixed(2)} €</span> }
      <div className='cart-icon'>
        <i
          onClick={() => setClickCart(!clickCart)} 
          className="fa fa-shopping-cart" 
          aria-hidden="true">
          <ModalCart 
            cart={cart}
            clicked={clickCart}
            closeModal={setClickCart}
          />
        </i>
        { !!cart.length && <span className='items-num'>{cart.length}</span> }           {/*  !! uguale a Boolean(csrt.length) */}
      </div>
    </div>
  )
}